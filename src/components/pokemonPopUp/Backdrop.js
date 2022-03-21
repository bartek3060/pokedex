import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return (
    <div onClick={props.closeBackdrop} className={styles.backdrop}>
      {" "}
    </div>
  );
};
export default Backdrop;
