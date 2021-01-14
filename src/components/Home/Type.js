import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "IUT Lyon 1 CS Student",
          "Fullstack Developer",
          "BG Event / BD Kfet",
          "Dank memer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
