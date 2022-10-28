import React, { useRef, useState, useEffect } from "react";
import "./dog.css";
import dog from '../../assets/dog_left_right_white.png'

function Dog() {
    
    
    
    const [playerState, setPlayerState] = useState('run')
    const canvas = useRef(null)
  
    function handleOnChange(e){
        console.log(e.target)
        setPlayerState(e.target.value)
    }
    const animationStates = [
        {
            name : 'idle', 
            frames : 7, 
        },
        {
            name : 'idleLeft', 
            frames : 7, 
        },
        {
            name : 'jump', 
            frames : 7, 
        },
        {
            name : 'jumpLeft', 
            frames : 7, 
        },
        {
            name : 'fall', 
            frames : 7, 
        },
        {
            name : 'fallLeft', 
            frames : 7, 
        },
        {
            name : 'run', 
            frames : 9, 
        },
        {
            name : 'runLeft', 
            frames : 9, 
        },
        {
            name : 'sit', 
            frames : 5, 
        },
        {
            name : 'sitLeft', 
            frames : 5, 
        },
        {
            name : 'roll', 
            frames : 7, 
        },
        {
            name : 'rollLeft', 
            frames : 7, 
        }
    ]
    useEffect(() => {
     
        const ctx = canvas.current?.getContext('2d');
  
        
        const CANVAS_WIDTH = canvas.current.width = 200;
        const CANVAS_HEIGHT = canvas.current.height = 200;
        
        const playerImage = new Image()
        playerImage.src = dog
        const spriteWidth = 200;
        const spriteHeight = 182;
        let gameFrame = 0;
        const staggerFrames = 5;
        const spriteAnimations = []
        animationStates.forEach((state, index)=>{
           let frames = {
                loc:[],
            }
            for (let j = 0; j < state.frames; j++) {
                const positionX = j * spriteWidth;
                let positionY = index * spriteHeight;
                frames.loc.push({x:positionX, y:positionY});
            }
            spriteAnimations[state.name] = frames;
        });
        console.log(spriteAnimations)
        
        function animate(){
            ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
            let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
            let frameX = spriteWidth * position;
            let frameY = spriteAnimations[playerState].loc[position].y
            console.log('frameY', frameY)
            ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight,  0, 0, spriteWidth, spriteHeight)
            
            gameFrame++;
            requestAnimationFrame(animate);
        }
        animate() 
    }
    , [playerState])
    
    return (
        <> <canvas ref={canvas} id="canvas1"></canvas>
        <div className="controls">
            <label htmlFor="animations">Choose animation</label>
            <select name="animations" id="animations" onChange={(e)=>handleOnChange(e)} value={playerState}>
               {
                   animationStates.length?animationStates.map(p=>{
                    return <option value={p.name}>{p.name.charAt(0).toUpperCase()+ p.name.slice(1)}</option>
                   }):null
               }
            </select>
        </div></>
  )
}

export default Dog;