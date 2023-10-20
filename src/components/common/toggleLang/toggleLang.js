import React, { useContext } from "react";
import "./toggleLang.css";
import { LangContext } from "../../../contexts/theme";

export default function ToggleLang() {
  const [es, toggleLang] = useContext(LangContext);

  return (
      <label className="switch" htmlFor="lang">
        <input
          type="checkbox"
          className="cb"
          id="lang"
          defaultChecked={es}
          onClick={toggleLang}
        ></input>
        <span className="toggle">
          <span className="left">En</span>
          <span className="right">Es</span>
        </span>
      </label>
  );
}
