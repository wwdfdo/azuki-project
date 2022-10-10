import React from "react";
import "./BackDrop.css";

function BackDrop(props) {
  const { onCancel } = props;

  return <div id="myModal" class="modal" onClick={onCancel}></div>;
}

export default BackDrop;
