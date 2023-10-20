import React, { useContext } from "react";
import { ThemeContext, LangContext } from "../../../contexts/theme";
import "./referenceCard.css";

function ReferenceCard({ reference, setCardsState, prev }) {
  function handleClose(id) {
    let cardToClose = "card" + id.toString();
    setCardsState({
      ...prev,
      [cardToClose]: false,
    });
  }
  const [isDark] = useContext(ThemeContext);
  const [es] = useContext(LangContext);
  return (
    <div className="referenceCardContainer">
      <section
        className={
          isDark ? "referenceCardWrapper" : "referenceCardWrapperLight"
        }
      >
        <button onClick={() => handleClose(reference.id)} className="x">
          X
        </button>
        <header>
          <span className="refName">{reference.name}</span>
          <p className="refText">
            {es ? reference.es.referenceText : reference.referenceText}
          </p>
        </header>
        <section className="foot">
          <img
            src={`/references/${reference.image}.png`}
            loading="lazy"
            alt={"profile of " + reference.name}
            className="profileImg"
          />
          <section className="coworkerInfo">
            <span>
              {es ? "Trabajó con Sergio como su" : "Worked with Sergio as his"}{" "}
              <span className="refRelation">
                {es ? reference.es.workRelation : reference.workRelation}
              </span>
            </span>
            <span>{es ? reference.es.title : reference.title}</span>
            <span>
              <a href={reference.linkedinProfile} _blank="true">
                {es ? "Perfil de LinkedIn" : "LinkedIn Profile"}
              </a>
            </span>
          </section>
        </section>
      </section>
    </div>
  );
}

export default ReferenceCard;
