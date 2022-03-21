import React from "react";
import styles from "./Button.module.css";
import { useSelector } from "react-redux";

function Button(props) {
  const darkModeState = useSelector((state) => state.darkModeSlice.darkMode);
  const darkModeClass = darkModeState ? styles.dark : "";

  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${props.styles} ${darkModeClass}`}
    >
      {props.message}{" "}
    </button>
  );
}

export default Button;
