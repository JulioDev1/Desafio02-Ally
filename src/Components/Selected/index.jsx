import "./styles.css";
export function Selected({ label, options }) {
  return (
    <div className="containerSelect">
      <label>{label}</label>
      <select className="countrySelect">
        <option>selecione uma opcao</option>
        {options.map((option) => (
          <option value={option.name_ptbr} key={option.name_ptbr}>
            {option.name_ptbr}
          </option>
        ))}
      </select>
    </div>
  );
}
