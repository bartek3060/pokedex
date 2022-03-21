import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./SinglePokemon.module.css";
import PokemonPopUp from "../pokemonPopUp/pokemonPopUp";

export default function SinglePokemon(props) {
  const darkModeState = useSelector((state) => state.darkModeSlice.darkMode);
  const darkModeClass = darkModeState ? styles.dark : "";
  const [modalState, setModalState] = useState(false);
  const openModalHandler = () => {
    setModalState((state) => !state);
  };
  return (
    <>
      <li
        onClick={openModalHandler}
        className={`${styles.pokeLi} ${darkModeClass} `}
      >
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${props.sprite})`,
          }}
        ></div>{" "}
        <h3> {props.name.toUpperCase()} </h3> <div> {props.type} </div>{" "}
      </li>{" "}
      {modalState && (
        <PokemonPopUp {...props} closeModal={openModalHandler}>
          {" "}
        </PokemonPopUp>
      )}{" "}
    </>
  );
}
