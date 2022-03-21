import React from "react";
import Backdrop from "../pokemonPopUp/Backdrop";
import styles from "./loadingPage.module.css";

function LoadingPage() {
  return (
    <div>
      <Backdrop></Backdrop>
      <div className="spinner">
        <i class={`fa-solid fa-spinner ${styles.slider}`}></i>
      </div>
    </div>
  );
}

export default LoadingPage;
