import { useEffect, useState, useRef } from "react";
import DerelictRoom from "./derelict-room.js";
import { Text } from "@react-three/drei";

import { useStore } from "../store";
import { RoomName } from "../utils/rooms-names";

export const Spaceship = (props) => {
  const { lightMode, setTwine } = useStore((state) => state);

  const ref = useRef();
  const [hidden, setHidden] = useState(false);
  const [res, setName] = useState({ name: "", label: "" });
  const [rand, setRand] = useState(false);

  useEffect(() => {
    setName(RoomName(props.face[0]));
    setRand(Math.random);
  }, []);

  useEffect(() => {
    if (res.name) {
      setTwine(
        `<tw-passagedata pid="${props.roomId}" name="${props.roomId}" tags="${
          hidden ? "hidden" : ""
        }" position="${620 + Math.round(props.position[0] * 75)},${
          320 + Math.round(props.position[2] * 75)
        }" size="100,100">
     (text-colour:lime)[''//${res.name}'']

      ${res.label}

      ${props.exits
        .map((rm) => {
          return `
          [[Move to ${direction(rm[1])}-&gt;${rm[2].id}]]\n`;
        })
        .join("")}
    </tw-passagedata>`
      );
    }
  }, [res]);

  const check = () => {
    setHidden(!hidden);
  };

  const direction = (dir) => {
    let str = "";
    switch (dir) {
      case 0:
        str = "North";
        break;
      case 90:
        str = "East";
        break;
      case 180:
        str = "South";
        break;
      case 270:
        str = "West";
        break;
    }
    return str;
  };

  return (
    <group {...props}>
      <DerelictRoom
        color={props.color}
        walls={props.walls}
        exits={props.exits}
        text={res.name}
        onCheck={check}
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
      {hidden && (
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
        fontSize={0.175}
        lineHeight={1.2}
        maxWidth={1.6}
        letterSpacing={0}
        textAlign={"center"}
        font="rad2.ttf"
        rotation={[-Math.PI * 0.5, 0, Math.PI * 0.5]}
        position={[0.3, 0.19, 0]}
      >
        {res.label}
      </Text>
    </group>
  );
};
