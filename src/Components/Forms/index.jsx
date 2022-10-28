import { Input } from "../Input";
import "./style.css";
// import { validateEmail } from "../../util";
import { useState } from "react";
import { Selected } from "../Selected";
import { validateEmail, validateName } from "../../util/regex";
import username from "../../icons/8666609_user_icon.svg";
import { MaskedInput } from "../Masked";
export function Forms() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [cell, setCell] = useState("");

  const [emailError, setErrorEmail] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [cpfError, setCpfError] = useState(false);
  const [cellError, setCellError] = useState(false);

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

  console.log(typeof name);
  return (
    <div className="containerForm">
      <div className="contentForm">
        <form className="forms">
          <h1>Dados Pessoais</h1>
          <Input
            type="text"
            placeholder="digite seu nome"
            label="Nome"
            value={name}
            setValue={setName}
            src={username}
          />

          {nameError && <p>digite um nome valido</p>}
          <Input
            placeholder="digite seu E-mail"
            label="E-mail"
            value={email}
            setValue={setEmail}
          />

          {emailError && <p>por favor digite um email valido</p>}
          <MaskedInput
            label="Telefone"
            mask="99 99999-9999"
            value={cell}
            onChange={(e) => setCell(e.target.value)}
          />
          {cellError && <p>campo obrigatorio!</p>}
          <MaskedInput
            label="Cpf"
            mask="999.999.999-99"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          {cpfError && <p>campo obrigatorio!</p>}
        </form>
        <div className="containerSelected">
          <h1>Destino de Interesse</h1>
          <Selected value="country" label="Pais" country="Inglaterra" />
          <Selected value="city" label="Cidade" country="Oslo" />
        </div>
      </div>

      <button onClick={validate}>Enviar</button>
    </div>
  );
}
