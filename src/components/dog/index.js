import React, { useRef, useState, useEffect, useContext } from "react";
import { ThemeContext, LangContext } from "../../contexts/theme";
import dog from "../../assets/dog_left_right_white.png";
import "./dog.css";

function Dog() {
  const [isDark] = useContext(ThemeContext);
  const [es] = useContext(LangContext);
  const [playerState, setPlayerState] = useState("run");
  const canvas = useRef(null);

  function handleOnChange(e) {
    if (e.target.value === "jump") {
      setPlayerState(e.target.value);
      setTimeout(() => {
        setPlayerState("fall");
      }, 300);
      setTimeout(() => {
        setPlayerState("idle");
      }, 500);
    } else if (e.target.value === "jumpLeft") {
      setPlayerState(e.target.value);
      setTimeout(() => {
        setPlayerState("fallLeft");
      }, 300);
      setTimeout(() => {
        setPlayerState("idleLeft");
      }, 500);
    } else setPlayerState(e.target.value);
  }
  const animationStates = [
    {
      name: "idle",
      frames: 7,
      label: es ? "Quieto" : "Idle",
    },
    {
      name: "idleLeft",
      frames: 7,
      label: es ? "Quieto Izquierda" : "Idle Left",
    },
    {
      name: "jump",
      frames: 7,
      label: es ? "Salto" : "Jump",
    },
    {
      name: "jumpLeft",
      frames: 7,
      label: es ? "Salto Izquierda" : "Jump Left",
    },
    {
      name: "fall",
      frames: 7,
      label: es ? "Caída" : "Fall",
    },
    {
      name: "fallLeft",
      frames: 7,
      label: es ? "Caída Izquierda" : "Fall Left",
    },
    {
      name: "run",
      frames: 9,
      label: es ? "Correr" : "Run",
    },
    {
      name: "runLeft",
      frames: 9,
      label: es ? "Correr Izquierda" : "Run Left",
    },
    {
      name: "sit",
      frames: 5,
      label: es ? "Sentado" : "Sit",
    },
    {
      name: "sitLeft",
      frames: 5,
      label: es ? "Sentado Izquierda" : "Sit Left",
    },
    {
      name: "roll",
      frames: 7,
      label: es ? "Rodar" : "Roll",
    },
    {
      name: "rollLeft",
      frames: 7,
      label: es ? "Rodar Izquierda" : "Roll Left",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setPlayerState("idle");
    }, 4000);
    setTimeout(() => {
      setPlayerState("sit");
    }, 15000);
  }, []);
  function handleOnClick() {
    setPlayerState("run");
    setTimeout(() => {
      setPlayerState("idle");
    }, 4000);
    setTimeout(() => {
      setPlayerState("sit");
    }, 15000);
  }

  useEffect(() => {
    const ctx = canvas.current?.getContext("2d");
    const CANVAS_WIDTH = (canvas.current.width = 200);
    const CANVAS_HEIGHT = (canvas.current.height = 200);
    const playerImage = new Image();
    playerImage.src = dog;
    const spriteWidth = 200;
    const spriteHeight = 182;
    let gameFrame = 0;
    const staggerFrames = 8;
    const spriteAnimations = [];
    animationStates.forEach((state, index) => {
      let frames = {
        loc: [],
      };
      for (let j = 0; j < state.frames; j++) {
        const positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({ x: positionX, y: positionY });
      }
      spriteAnimations[state.name] = frames;
    });

    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      let position =
        Math.floor(gameFrame / staggerFrames) %
        spriteAnimations[playerState].loc.length;
      let frameX = spriteWidth * position;
      let frameY = spriteAnimations[playerState].loc[position].y;
      ctx.drawImage(
        playerImage,
        frameX,
        frameY,
        spriteWidth,
        spriteHeight,
        0,
        0,
        spriteWidth,
        spriteHeight
      );

      gameFrame++;
      requestAnimationFrame(animate);
    }
    animate();
  }, [playerState]);

  return (
    <>
      <div
        onClick={() => {
          handleOnClick();
        }}
      >
        {" "}
        <canvas ref={canvas} id={isDark ? "canvas1" : "canvas1Light"} />
      </div>
      <div className="controls">
        <label htmlFor="animations">{es?"Él es Tom, dile qué hacer":"He is Tom, tell him what to do"}</label>
        <select
          name="animations"
          id="animations"
          className={isDark ? "animations": "animationsLight"}
          onChange={(e) => handleOnChange(e)}
          value={playerState}
        >
          {animationStates.length
            ? animationStates.map((p) => {
                if (p.name.includes("fall")) {
                  return null;
                } else
                  return (
                    <option key={p.name} value={p.name}>
                      {p.label}
                    </option>
                  );
              })
            : null}
        </select>
      </div>
    </>
  );
}

export default Dog;
