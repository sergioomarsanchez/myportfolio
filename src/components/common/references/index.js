import React, { useContext, useState } from "react";
import { ReferencesData } from "../../data/references";
import { ThemeContext } from "../../../contexts/theme";
import "./references.css";
import ReferenceCard from "../referenceCard";

function References() {
  const [isDark] = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [cardsState, setCardsState] = useState({
    'card1':false,
    'card2':false,
    'card3':false,
    'card4':false,
    'card5':false,
  })

  function handleClick() {
    if (open) {
      setClosing(true);
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 500);
    } else {
      setOpen(true);
    }
  }
  function openCard(id){
      let cardToOpen = 'card' + id.toString()
      setTimeout(() => {
          setCardsState({
              ...cardsState,
              [cardToOpen]: !cardsState[cardToOpen]
          })
      }, 500);
  }
  return (
    <section>
      <button
        onClick={() => handleClick()}
        className={isDark ? "referencesButton" : "referencesButtonLight"}
        disabled={Object.values(cardsState).includes(true)}
        style={{cursor:Object.values(cardsState).includes(true)?'auto':'pointer'}}
      >

       <span>My References</span> 
        {ReferencesData?.map((r) => {
          return (
            <div
              key={r.id}
              className={
                open
                  ? closing
                    ? "closing"
                    : "profilePic circle"
                  : "profilePic"
              }
              onClick={()=>{openCard(r.id)}}
            >
              <img
                src={r.image}
                loading="lazy"
                alt={`profile of ${r.name}`}
                className="profileImage"
                />
            </div>
          );
        })}
                {ReferencesData?.map((r) => {
          return(
              cardsState['card' + r.id.toString()]?
          <ReferenceCard  reference={r} setCardsState={setCardsState} className='refCard'
          />
           :null
          ) })}
      </button>
    </section>
  );
}

export default References;
