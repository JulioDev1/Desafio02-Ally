import InputMask from "react-input-mask";
import "./styles.css";

const onlyNumber = (str) => str.replace(/[^0-9]/g, "");
export function MaskedInput({ value, onChange, label, mask }) {
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        value: onlyNumber(event.target.value),
      },
    });
  }
  return (
    <div className="inputMaskContainer">
      <label>{label}</label>
      <InputMask
        className="maskedInput"
        mask={mask}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
