import { ShipGenerator } from "./utils/ship-generator";
import { Chance } from "chance";
import { MapControls, Stars, Loader, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import { Spaceship } from "./components/spaceship";
import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import { useStore } from "./store";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { TEMPLATE } from "./utils/template";

function App() {
  const {
    setShip,
    ship,
    selectedLabel,
    selectedText,
    setLightMode,
    lightMode,
    setShowGrid,
    showGrid,
    twine,
    setHiddeMenu,
    hiddeMenu,
  } = useStore((state) => state);

  useEffect(() => {
    const tirada = Chance().rpg("1d100")[0];
    const pecio = ShipGenerator(99); // TODO replace

    setShip(pecio);
  }, []);

  const renderShip = () => {
    return ship.ship.children.map((room, i) => {
      if (room.tag === "initial") {
        room.face = [1];
      } else {
        room.face = Chance().rpg("1d6");
      }
      room.type = Chance().rpg("1d10");

      let color = "lime";

      switch (room.face[0]) {
        case 1:
          color = "cyan";
          break;
        case 2:
          color = "lime";
          break;
        case 3:
          color = "red";
          break;
        case 4:
          color = "blue";
          break;
        case 5:
          color = "yellow";
          break;
        case 6:
          color = "orange";
          break;
      }

      return (
        <group>
          <Spaceship
            color={color}
            rid={i}
            key={room.id}
            exits={room.exits}
            roomId={room.id}
            face={room.face}
            mid={room.id}
            position={[
              -1.5 + ship.ship.size[0] / 2 - room.position[0] / 0.9,
              0,
              -1 + ship.ship.size[1] / 2 - room.position[1] / 0.9,
            ]}
          />
        </group>
      );
    });
  };

  const grid = useRef();

  return (
    <div
      id="all"
      className={`relative top-0 left-0 w-full h-screen ${
        !lightMode ? `bg-black` : `bg-gray-200`
      } rounded-3xl overflow-hidden border-4 ${
        !lightMode ? `border-cyan` : `border-black`
      }`}
    >
      <Canvas
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
        camera={{ fov: 32, position: [10, 16, -8] }}
      >
        <MapControls />

        <Suspense fallback={null}>
          <EffectComposer>
            <Noise opacity={0.2} />
            <Vignette eskil={false} offset={0.3} darkness={0.8} />
          </EffectComposer>
          {ship && (
            <>
              {showGrid && (
                <>
                  <gridHelper
                    position={[0, -1, 0]}
                    ref={grid}
                    args={[
                      ship.ship.size[0] > ship.ship.size[1]
                        ? ship.ship.size[0] + 1.5
                        : ship.ship.size[1] + 1.5,
                      Math.ceil(ship.ship.children.length / 2),
                    ]}
                  />
                  <Text
                    color={!lightMode ? `black` : `white`}
                    fontSize={0.56}
                    outlineWidth={0.01}
                    outlineColor={!lightMode ? `white` : `black`}
                    lineHeight={10}
                    maxWidth={100}
                    letterSpacing={0}
                    textAlign={"right"}
                    font="rad2.ttf"
                    rotation={[-Math.PI * 0.5, 0, Math.PI * 0.5]}
                    position={[0, -5, 0]}
                  >
                    SECTOR-DP{Math.floor(Math.random() * 999)}
                  </Text>
                </>
              )}
            </>
          )}
          {!lightMode && <Stars count={10000} saturation={1} depth={500} />}
          <group>{ship && <>{renderShip()}</>}</group>
        </Suspense>
      </Canvas>
      <Loader />
      {hiddeMenu && (
        <div className="absolute left-8 top-8 select-none pointer-events-none ">
          <p
            className={`text-4xl font-teko font-bold ${
              !lightMode ? `text-white` : `text-gray-900`
            } tracking-wide`}
          >
            > {ship && ship.pecio.name.toUpperCase()}
          </p>
          <p
            className={` ${
              !lightMode ? ` text-lime` : `text-gray-700`
            } text-2xl font-teko font-bold tracking-wider`}
          >
            {ship && ship.pecio.shipTyp.toUpperCase()}
          </p>
          <div
            data-html2canvas-ignore="true"
            onClick={() => {
              setHiddeMenu(!hiddeMenu);
            }}
            className={`${
              !lightMode ? `bg-cyan` : `bg-gray-900`
            } w-1/3 text-center mt-1 cursor-pointer hover:bg-transparent 
        pointer-events-auto hover:bg-white`}
          >
            <p
              className={`font-radjhani font-bold text-sm ${
                !lightMode ? `text-black` : `text-white hover:text-black`
              } mb-1`}
            >
              Show Menu
            </p>{" "}
          </div>
          <div
            data-html2canvas-ignore="true"
            onClick={() => {
              html2canvas(document.querySelector("#all")).then((canvas) => {
                const img = canvas.toBlob(
                  (d) => {
                    const doc = new jsPDF("l", "px", [
                      canvas.width / 2,
                      canvas.height / 2,
                    ]);

                    doc.addImage(
                      canvas.toDataURL(),
                      "PNG",
                      0,
                      0,
                      canvas.width / 2,
                      canvas.height / 2
                    );

                    doc.save("derelict.pdf");
                  },
                  "image/png",
                  100
                );
              });
            }}
            className={`${
              !lightMode ? `bg-cyan` : `bg-gray-900`
            } w-1/3 text-center mt-1 cursor-pointer hover:bg-transparent 
        pointer-events-auto hover:bg-white`}
          >
            <p
              className={`font-radjhani font-bold text-sm ${
                !lightMode ? `text-black` : `text-white hover:text-black`
              } mb-1`}
            >
              Save
            </p>{" "}
          </div>
        </div>
      )}
      {!hiddeMenu && (
        <div className="absolute left-8 top-8 select-none pointer-events-none ">
          <p
            className={`text-8xl font-teko font-bold ${
              !lightMode ? `text-white` : `text-gray-900`
            } tracking-wide`}
          >
            > {ship && ship.pecio.name.toUpperCase()}
          </p>
          <p
            className={` ${
              !lightMode ? ` text-lime` : `text-gray-700`
            } text-5xl font-teko font-bold tracking-wider`}
          >
            {ship && ship.pecio.shipTyp.toUpperCase()}
          </p>
          <br />
          <ul className="text-white text-2xl font-radjhani">
            <li>
              <span
                className={`${
                  !lightMode ? `text-white` : `text-black`
                } uppercase font-bold`}
              >
                Status:
              </span>{" "}
              <span className={`${!lightMode ? `text-lime` : `text-gray-600`}`}>
                {ship && ship.pecio.status}
              </span>
            </li>
            <li>
              <span
                className={`${
                  !lightMode ? `text-white` : `text-black`
                } uppercase font-bold`}
              >
                Survivors:
              </span>{" "}
              <span className={`${!lightMode ? `text-lime` : `text-gray-600`}`}>
                {ship && ship.pecio.survivors}
              </span>
            </li>
            <li>
              <span
                className={`${
                  !lightMode ? `text-white` : `text-black`
                } uppercase font-bold`}
              >
                Engines:
              </span>{" "}
              <span className={`${!lightMode ? `text-lime` : `text-gray-600`}`}>
                {ship && ship.pecio.engines}
              </span>
            </li>
            <li>
              <span
                className={`${
                  !lightMode ? `text-white` : `text-black`
                } uppercase font-bold`}
              >
                Salvage:
              </span>{" "}
              <span className={`${!lightMode ? `text-lime` : `text-gray-600`}`}>
                {ship &&
                  (ship.pecio.salvage.includes("#")
                    ? `${Chance()
                        .rpg(ship.pecio.salvage.split("#")[0])
                        .reduce((a, b) => a + b, 0)} ${
                        ship.pecio.salvage.split("#")[1]
                      }`
                    : ship.pecio.salvage)}
              </span>
            </li>
            <li>
              <span
                className={`${
                  !lightMode ? `text-white` : `text-black`
                } uppercase font-bold`}
              >
                Ruination:
              </span>{" "}
              <span className={`${!lightMode ? `text-lime` : `text-gray-600`}`}>
                {ship && ship.pecio.ruination}
              </span>
            </li>
            <li>
              <span
                className={`${
                  !lightMode ? `text-white` : `text-black`
                } uppercase font-bold`}
              >
                Weird:
              </span>{" "}
              <span className={`${!lightMode ? `text-lime` : `text-gray-600`}`}>
                {ship && ship.pecio.weird}
              </span>
            </li>
          </ul>
          <div data-html2canvas-ignore="true" className="w-1/3 p-8">
            <hr />
          </div>
          <div
            data-html2canvas-ignore="true"
            onClick={() => {
              const tirada = Chance().rpg("1d100")[0];
              const pecio = ShipGenerator(tirada);
              setShip(pecio);
            }}
            className={`${
              !lightMode ? `bg-lime` : `bg-gray-900`
            } w-1/3 text-center mt-2 cursor-pointer hover:bg-transparent 
        pointer-events-auto hover:bg-white`}
          >
            <p
              className={`font-radjhani font-bold text-xl ${
                !lightMode ? `text-black` : `text-white hover:text-black`
              } mb-2`}
            >
              Regenerate Spaceship
            </p>{" "}
          </div>
          <div
            data-html2canvas-ignore="true"
            onClick={() => {
              setLightMode();
            }}
            className={`${
              !lightMode ? `bg-lime` : `bg-gray-900`
            } w-1/3 text-center mt-2 cursor-pointer hover:bg-transparent 
        pointer-events-auto hover:bg-white`}
          >
            <p
              className={`font-radjhani font-bold text-xl ${
                !lightMode ? `text-black` : `text-white hover:text-black`
              } mb-2`}
            >
              {lightMode ? `Dark Mode` : `Light Mode`}
            </p>{" "}
          </div>
          <div
            data-html2canvas-ignore="true"
            onClick={() => {
              setShowGrid();
            }}
            className={`${
              !lightMode ? `bg-lime` : `bg-gray-900`
            } w-1/3 text-center mt-2 cursor-pointer hover:bg-transparent 
        pointer-events-auto hover:bg-white`}
          >
            <p
              className={`font-radjhani font-bold text-xl ${
                !lightMode ? `text-black` : `text-white hover:text-black`
              } mb-2`}
            >
              {showGrid ? `Hide Grid` : `Show Grid`}
            </p>{" "}
          </div>
          <div
            data-html2canvas-ignore="true"
            onClick={() => {
              html2canvas(document.querySelector("#all")).then((canvas) => {
                const img = canvas.toBlob(
                  (d) => {
                    const doc = new jsPDF("l", "px", [
                      canvas.width / 2,
                      canvas.height / 2,
                    ]);

                    doc.addImage(
                      canvas.toDataURL(),
                      "PNG",
                      0,
                      0,
                      canvas.width / 2,
                      canvas.height / 2
                    );

                    doc.save("derelict.pdf");
                  },
                  "image/png",
                  100
                );
              });
            }}
            className={`${
              !lightMode ? `bg-cyan` : `bg-gray-900`
            } w-1/3 text-center mt-2 cursor-pointer hover:bg-transparent 
        pointer-events-auto hover:bg-white`}
          >
            <p
              className={`font-radjhani font-bold text-xl ${
                !lightMode ? `text-black` : `text-white hover:text-black`
              } mb-2`}
            >
              Save As PDF
            </p>{" "}
          </div>
          <div
            data-html2canvas-ignore="true"
            onClick={() => {
              const t = TEMPLATE(
                twine,
                ship.pecio.name.toUpperCase(),
                ship.ship.children[0].id
              );
              var a = document.createElement("a");
              var file = new Blob([t], { type: "text/html; charset=utf-8" });
              a.href = URL.createObjectURL(file);
              var url = window.URL.createObjectURL(file, { oneTimeOnly: true });
              //window.open(url, '_blank', '');
              a.href = url;
              a.target = "_blank";

              a.click();
              a.download = `${ship.pecio.name
                .toUpperCase()
                .replace(" ", "_")}.html`;
              a.click();
            }}
            className={`${
              !lightMode ? `bg-cyan` : `bg-gray-900`
            } w-1/3 text-center mt-2 cursor-pointer hover:bg-transparent 
        pointer-events-auto hover:bg-white`}
          >
            <p
              className={`font-radjhani font-bold text-xl ${
                !lightMode ? `text-black` : `text-white hover:text-black`
              } mb-2`}
            >
              Generate TWINE
            </p>{" "}
          </div>
          <div
            data-html2canvas-ignore="true"
            onClick={() => {
              setHiddeMenu(!hiddeMenu);
            }}
            className={`${
              !lightMode ? `bg-cyan` : `bg-gray-900`
            } w-1/3 text-center mt-2 cursor-pointer hover:bg-transparent 
        pointer-events-auto hover:bg-white`}
          >
            <p
              className={`font-radjhani font-bold text-xl ${
                !lightMode ? `text-black` : `text-white hover:text-black`
              } mb-2`}
            >
              Collapse Menu
            </p>{" "}
          </div>
        </div>
      )}

      <div className="absolute left-8 bottom-8 select-none pointer-events-none w-1/2 ">
        <p className="text-3xl font-teko font-bold tracking-wider text-lime">
          {selectedText}
        </p>
        <p className="text-3xl font-teko font-bold tracking-wider text-white">
          {selectedLabel}
        </p>
      </div>
      <div
        data-html2canvas-ignore="true"
        className="absolute right-8 bottom-8 select-none pointer-events-none "
      >
        <p
          className={`text-lg font-radjhani font-bold tracking-wider ${
            !lightMode ? `text-cyan` : `text-gray-700`
          }`}
        >
          Pan: Left-Mouse / Rotate: Right-Mouse / Zoom: Middle-Mouse
        </p>
      </div>
    </div>
  );
}

export default App;
