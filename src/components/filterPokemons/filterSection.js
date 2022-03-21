import React, { useRef } from "react";
import Button from "../Ui/Button";
import { useDispatch, useSelector } from "react-redux";
import FilterByname from "./filterByname";
import FilterbyTypes from "./filterbyTypes";
import styles from "./filterSection.module.css";
import { pokemonAddActions } from "../store/storeOfSlices";

function FilterSection() {
  const dispatch = useDispatch();
  const nameVal = useRef();
  const typeVal = useRef();
  const darkModeState = useSelector((state) => state.darkModeSlice.darkMode);
  const darkModeClass = darkModeState ? styles.dark : "";
  const submitHandler = (e) => {
    nameVal.current.value = nameVal.current.value.toLowerCase();
    typeVal.current.value.toLowerCase();
    e.preventDefault();
    dispatch(
      pokemonAddActions.filterDataToDisplay({
        name: nameVal.current.value,
        type: typeVal.current.value,
      })
    );
    if (!typeVal.current.value) {
      typeVal.current.value = "All";
    }
  };
  return (
    <form
      onSubmit={submitHandler}
      className={`${styles.filterSection} ${darkModeClass}`}
    >
      <FilterByname ref={nameVal}> </FilterByname>{" "}
      <FilterbyTypes ref={typeVal}> </FilterbyTypes>{" "}
      <Button styles={styles.button} message="Filter">
        {" "}
      </Button>{" "}
    </form>
  );
}

export default FilterSection;
