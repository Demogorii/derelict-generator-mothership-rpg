import { useEffect, useState, useRef } from "react";
import DerelictRoom from "./derelict-room.js";
import { Text } from "@react-three/drei";

import { useStore } from "../store";
import { RoomName } from "../utils/rooms-names";

export const Spaceship = (props) => {
  const { lightMode } = useStore((state) => state);

  const ref = useRef();

  const [res, setName] = useState({ name: "", label: "" });
  const [rand, setRand] = useState(false);

  useEffect(() => {
    setName(RoomName(props.face[0]));
    setRand(Math.random);
  }, []);

  const checkHidden = () => {
    if (res.name === "CARGO HOLD") {
      return true;
    }
  };

  const check =
    res.name === "CARGO HOLD" && res.label.includes("Contains") && rand < 0.2;

  return (
    <group {...props} ref={ref}>
      <DerelictRoom
        color={props.color}
        walls={props.walls}
        exits={props.exits}
        text={res.name}
        hidden={check}
        label={res.label}
      />
      <Text
        color={!lightMode ? `lime` : `black`}
        fontSize={0.3}
        lineHeight={1}
        maxWidth={1.5}
        letterSpacing={0.02}
        textAlign={"center"}
        font="tek3.ttf"
        anchorX="center"
        anchorY="middle"
        rotation={[-Math.PI * 0.5, 0, Math.PI * 0.5]}
        position={[-0.4, 0.2, 0]}
      >
        {res.name}
      </Text>
      {check && (
        <Text
          color={"red"}
          fontSize={0.3}
          lineHeight={1}
          maxWidth={1.5}
          letterSpacing={0.02}
          textAlign={"center"}
          font="tek3.ttf"
          anchorX="center"
          anchorY="middle"
          rotation={[0, Math.PI * 0.5, 0]}
          position={[-0.8, 0.4, 0]}
        >
          HIDDEN
        </Text>
      )}
      <Text
        color={!lightMode ? `white` : `#000`}
        fontSize={0.17}
        lineHeight={1.2}
        maxWidth={1.6}
        letterSpacing={0}
        textAlign={"center"}
        font="rob1.ttf"
        rotation={[-Math.PI * 0.5, 0, Math.PI * 0.5]}
        position={[0.3, 0.19, 0]}
      >
        {res.label}
      </Text>
    </group>
  );
};
