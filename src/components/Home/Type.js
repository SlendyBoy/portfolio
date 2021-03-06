import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "IUT Lyon 1 CS Student",
          "Looking 4 an internship",
          "BG Event / BD Kfet at BDE Info Lyon",
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
