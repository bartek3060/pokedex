import React from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

export default function PokemonPopUp(props) {
  return (
    <div>
      <Backdrop closeBackdrop={props.closeModal}></Backdrop>
      <Modal {...props}></Modal>
    </div>
  );
}
