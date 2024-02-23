import React, { useEffect } from "react";
import Phaser from "phaser";

const GameRenderer = ({ config }) => {
  useEffect(() => {
    const main = new Phaser.Game(config);

    return () => {
      main.destroy(true);
    };
  }, [config]);

  return (
    <div style={{ width: "100vw", height: "100vh" }} id="phaser-container" />
  );
};

export default GameRenderer;
