import React from "react";
import styles from "./filterByType.module.css";

const FilterbyTypes = React.forwardRef(function FilterbyTypes(props, ref) {
  const inputClickHandler = () => {
    ref.current.value = "";
  };
  return (
    <div className={styles.filterByType}>
      {" "}
      <label> Select Type </label>{" "}
      <input
        onClick={inputClickHandler}
        defaultValue={"All"}
        type="text"
        list="types"
        ref={ref}
      />{" "}
      <datalist id="types">
        <option> All </option> <option> normal </option>{" "}
        <option> grass </option> <option> fire </option>{" "}
        <option> water </option> <option> poison </option>{" "}
        <option> fairy </option> <option> bug </option>{" "}
        <option> ground </option> <option> physic </option>{" "}
        <option> fighting </option> <option> rock </option>{" "}
        <option> ghost </option> <option> electric </option>{" "}
        <option> ice </option> <option> dark </option>{" "}
      </datalist>{" "}
    </div>
  );
});

export default FilterbyTypes;
