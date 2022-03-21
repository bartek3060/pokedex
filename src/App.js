import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch20Pokemons } from "./components/store/pokemon-actions";
import styles from "./App.module.css";
import PokemonList from "./components/pokemonsList/PokemonList";
import LoadingPage from "./components/Ui/loadingPage";
import FilterSection from "./components/filterPokemons/filterSection";
import DarkMode from "./components/Ui/DarkMode";

function App() {
  const dispatch = useDispatch();
  const isFirstLoad = useSelector((state) => state.pokemonAddSlice.firstLoad);
  const darkModeState = useSelector((state) => state.darkModeSlice.darkMode);
  const darkModeClass = darkModeState ? styles.dark : "";

  const loadPokemons = useCallback(
    (offset = 0) => {
      dispatch(fetch20Pokemons(offset));
    },
    [dispatch]
  );
  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  return (
    <div className={`${styles.wrapper} ${darkModeClass} `}>
      <DarkMode></DarkMode>
      <FilterSection></FilterSection>
      <PokemonList loadMore={loadPokemons}> </PokemonList>{" "}
      {isFirstLoad && <LoadingPage> </LoadingPage>}{" "}
    </div>
  );
}

export default App;
