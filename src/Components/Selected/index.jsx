import "./styles.css";
export function Selected({ label, options }) {
  return (
    <div className="containerSelect">
      <label>{label}</label>
      <select className="countrySelect">
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.name_ptbr} key={option.code}>
            {option.name_ptbr}
          </option>
        ))}
      </select>
    </div>
  );
}
