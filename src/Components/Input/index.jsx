import { useState } from "react";
import "./styles.css";
export function Input(props) {
  return (
    <div className="inputs">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
}
