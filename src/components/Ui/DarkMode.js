import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./darkMode.module.css";
import { darkModeActions } from "../store/storeOfSlices";

function DarkMode() {
  const darkModeState = useSelector((state) => state.darkModeSlice.darkMode);
  const dispatch = useDispatch();
  const setModeHandler = (e) => {
    dispatch(darkModeActions.changeDarkModeState());
  };
  console.log(darkModeState);
  const icon = !darkModeState ? (
    <i className={`fa-solid fa-moon ${styles.darkMode}`}> </i>
  ) : (
    <i className={`fa-solid fa-sun ${styles.darkMode}`}></i>
  );
  return <div onClick={setModeHandler}> {icon} </div>;
}

export default DarkMode;
