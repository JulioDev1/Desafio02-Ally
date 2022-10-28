import "./styles.css";
export function Input(props) {
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
