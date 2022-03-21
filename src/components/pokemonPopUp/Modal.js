import React from "react";
import Button from "../Ui/Button";
import styles from "./Modal.module.css";
import { useSelector } from "react-redux";

export default function Modal(props) {
  const darkModeState = useSelector((state) => state.darkModeSlice.darkMode);
  const darkModeClass = darkModeState ? styles.dark : "";
  return (
    <div className={`${styles.modal} ${darkModeClass} `}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${props.sprite})`,
        }}
      ></div>{" "}
      <div className={`${styles.data} ${darkModeClass}`}>
        {" "}
        <div>
          <span className={styles.name}> Name: </span> <span> Type: </span>{" "}
          <span> Height: </span> <span> Weight: </span>{" "}
        </div>{" "}
        <div>
          <span className={styles.name}> {props.name.toUpperCase()} </span>{" "}
          <span> {props.type} </span>{" "}
          <span>
            {" "}
            {props.height}
            cm{" "}
          </span>{" "}
          <span>
            {" "}
            {props.weight}
            kg{" "}
          </span>{" "}
        </div>{" "}
        <Button
          styles={styles.button}
          message="Close"
          onClick={props.closeModal}
        >
          {" "}
        </Button>{" "}
      </div>{" "}
    </div>
  );
}
