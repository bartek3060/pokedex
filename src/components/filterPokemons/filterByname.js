import React from "react";
import styles from "./filterByname.module.css";

const FilterByname = React.forwardRef(function FilterByname(prop, ref) {
  return (
    <div className={styles.filterByName}>
      {" "}
      <label> Enter Pokemon Name </label> <input type="text" ref={ref} />
    </div>
  );
});

export default FilterByname;
