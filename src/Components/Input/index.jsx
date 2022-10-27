import { useState } from "react";
import "./styles.css";
export function Input(props) {
  const [value, setValue] = useState("");
  return (
    <div className="inputs">
      <label>{props.label}</label>
      <input
        placeholder={props.placeholder}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
}
