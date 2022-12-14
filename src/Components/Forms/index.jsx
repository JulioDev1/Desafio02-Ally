import { Input } from "../Input";
import "./style.css";
// import { validateEmail } from "../../util";
import { useState } from "react";
import { Selected } from "../Selected";
import { validateEmail, validateName } from "../../util/regex";
import { MaskedInput } from "../Masked";
import { useEffect } from "react";
export function Forms() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [cell, setCell] = useState("");

  const [emailError, setErrorEmail] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [cpfError, setCpfError] = useState(false);
  const [cellError, setCellError] = useState(false);
  const [countries, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  function validate() {
    if (!validateEmail.test(email)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }

    if (!validateName.test(name)) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (cpf === "") {
      setCpfError(true);
    } else {
      setCpfError(false);
    }

    if (cell === "") {
      setCellError(true);
    } else {
      setCellError(false);
    }

    return setCpf("");
  }

  useEffect(() => {
    fetch("https://amazon-api.sellead.com/country")
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);
  useEffect(() => {
    fetch("https://amazon-api.sellead.com/city")
      .then((response) => response.json())
      .then((data) => setCity(data));
  }, []);
  return (
    <div className="containerForm">
      <div className="contentForm">
        <form className="forms">
          <h1>Dados Pessoais</h1>

          <Input
            type="text"
            placeholder="Digite seu nome"
            label="Nome"
            value={name}
            setValue={setName}
          />
          {nameError && <p>Digite um nome valido</p>}

          <Input
            placeholder="Digite seu E-mail"
            label="E-mail"
            value={email}
            setValue={setEmail}
          />
          {emailError && <p>Por favor digite um email valido</p>}

          <MaskedInput
            label="Telefone"
            mask="99 99999-9999"
            value={cell}
            onChange={(e) => setCell(e.target.value)}
          />
          {cellError && <p>Campo obrigatorio!</p>}

          <MaskedInput
            label="CPF"
            mask="999.999.999-99"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          {cpfError && <p>Campo obrigatorio!</p>}
        </form>
        <div className="containerSelected">
          <h1>Destino de Interesse</h1>

          <Selected value="Pa??s" label="Pais" options={countries} />

          <Selected value="City" label="Cidade" options={city} />
        </div>
      </div>

      <button onClick={validate}>Enviar</button>
    </div>
  );
}
