import React from "react";
import "./check-more-button.css";

function CheckMoreButton({ nameButton }) {
  return (
    <div className="buttonWrapper">
      <span className="anch">
        {nameButton}
        <span className="arrowButton">
          <span></span>
        </span>
      </span>
    </div>
  );
}

export default CheckMoreButton;
