import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme";
import "./separator.css";
function Separator() {
  const [isDark] = useContext(ThemeContext)
  return <div className={isDark?"separator":"separatorLight"}></div>;
}

export default Separator;