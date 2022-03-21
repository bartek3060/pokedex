import React from "react";
import { useSelector } from "react-redux";
import SinglePokemon from "./SinglePokemon";
import styles from "./PokemonList.module.css";
import Button from "../Ui/Button";

export default function PokemonList(props) {
  const pokemonsToDsiplay = useSelector(
    (state) => state.pokemonAddSlice.pokemonToDisplay
  );
  const offSet = useSelector((state) => state.pokemonAddSlice.offSet);
  const loadingFirst = useSelector((state) => state.pokemonAddSlice.firstLoad);
  const isLoading = useSelector((state) => state.pokemonAddSlice.isLoading);
  const darkModeState = useSelector((state) => state.darkModeSlice.darkMode);
  const darkModeClass = darkModeState ? styles.dark : "";
  const pokemonsTodisplayLi =
    pokemonsToDsiplay.length === 0 && !loadingFirst ? (
      <div className={styles.alternativeMessage}>
        That Pokemon does not exist. Please try again.
      </div>
    ) : (
      pokemonsToDsiplay.map((pokemon) => (
        <SinglePokemon
          key={pokemon.id}
          type={pokemon.types[0].type.name}
          name={pokemon.name}
          sprite={pokemon.sprites.front_default}
          weight={pokemon.weight}
          height={pokemon.height}
        >
          {" "}
        </SinglePokemon>
      ))
    );
  const message = !isLoading ? (
    <i className={`fa-solid fa-spinner ${styles.spinner} ${darkModeClass}`}></i>
  ) : (
    "Load more..."
  );
  return (
    <>
      {" "}
      <ul className={`${styles.list} ${darkModeClass} `}>
        {" "}
        {pokemonsTodisplayLi}{" "}
        {!loadingFirst && (
          <div className={styles.containerButt}>
            <Button
              message={message}
              onClick={() => props.loadMore(offSet)}
              styles={styles.moreButton}
            ></Button>
          </div>
        )}{" "}
      </ul>{" "}
    </>
  );
}
