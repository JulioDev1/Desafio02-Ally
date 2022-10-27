import { Input } from "../Input";
import "./style.css";
// import { validateEmail } from "../../util";
import { useState } from "react";
import { Selected } from "../Selected";
export function Forms() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [cell, setCell] = useState("");

  console.log({ email, name });
  return (
    <form className="forms">
      <h1>Dados Pessoais</h1>
      <Input
        type="text"
        placeholder="digite seu nome"
        label="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="digite seu E-mail"
        label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="digite seu digite seu telefone"
        label="Telefone"
        value={cell}
        onChange={(e) => setCell(e.target.value)}
      />
      <Input
        placeholder="digite seu CPF"
        label="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <Selected value="country" label="Pais" country="Inglaterra" />
      <Selected value="city" label="Cidade" country="Oslo" />
      <button>Enviar</button>
    </form>
  );
}
