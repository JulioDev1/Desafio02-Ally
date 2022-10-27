import "./styles.css";
export function Selected(props) {
  return (
    <div className="containerSelect">
      <label>{props.label}</label>
      <select className="countrySelect">
        <option value={props.value}>{props.country}</option>
      </select>
    </div>
  );
}
