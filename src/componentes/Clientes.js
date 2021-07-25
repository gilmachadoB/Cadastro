import React, { useState } from "react";

const Clientes = (props) => {
  const [form, setForm] = useState({});
  const handleInput = function (ev, key) {
    ev.preventDefault();
    setForm({ ...form, [key]: ev.target.value });
  };
  const saveItems = function () {
    localStorage.setItem("clientes", JSON.stringify(form));
  };
  return (
    <div className="container">
      <form className="row">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label for="name">Nome completo</label>
              <input
                onChange={(ev) => handleInput(ev, "name")}
                type="text"
                className="form-control"
                id="name"
                placeholder="João das Neves"
              />
            </div>
            <div className="form-group">
              <label for="name">CPF</label>
              <input
                onChange={(ev) => handleInput(ev, "cpf")}
                type="number"
                className="form-control"
                id="cpf"
                placeholder="000.111.222-66"
              />
            </div>
          </div>
          <div className="col-md-6">
            {" "}
            <div className="form-group">
              <label for="email">E-mail</label>
              <input
                onChange={(ev) => handleInput(ev, "email")}
                type="text"
                className="form-control"
                id="email"
                placeholder="joaoneves@gmail.com"
              />
            </div>
            <div className="form-group">
              <label for="tel">Telefone</label>
              <input
                onChange={(ev) => handleInput(ev, "telefone")}
                type="number"
                className="form-control"
                id="tel"
                placeholder="34 90000-1111"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {" "}
            <div className="form-group">
              <label for="endereço">Endereço</label>
              <input
                onChange={(ev) => handleInput(ev, "endereço")}
                type="text"
                className="form-control"
                id="endereço"
                placeholder="Rua João Barros"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label for="name">Número</label>
              <input
                onChange={(ev) => handleInput(ev, "numero")}
                type="number"
                className="form-control"
                id="numero"
                placeholder="301"
              />
            </div>
            <div className="form-group">
              <label for="cidade">Cidade</label>
              <input
                onChange={(ev) => handleInput(ev, "cidade")}
                type="text"
                className="form-control"
                id="cidade"
                placeholder="Uberlândia"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label for="complemento">Complemento</label>
              <input
                onChange={(ev) => handleInput(ev, "complemento")}
                type="text"
                className="form-control"
                id="complemento"
                placeholder="Condomínio"
              />
            </div>

            <div className="form-group">
              <label for="bairro">Bairro</label>
              <input
                onChange={(ev) => handleInput(ev, "bairro")}
                type="text"
                className="form-control"
                id="bairro"
                placeholder="Santa Helena"
              />
            </div>

            <div className="form-group">
              <label for="cep">CEP</label>
              <input
                onChange={(ev) => handleInput(ev, "cep")}
                type="number"
                className="form-control"
                id="cep"
                placeholder="35000-500"
              />
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label for="estado">Estado</label>
                <input
                  onChange={(ev) => handleInput(ev, "estado")}
                  type="text"
                  className="form-control"
                  id="estado"
                  placeholder="MG"
                />
              </div>
            </div>
          </div>
        </div>

        <button className="btn" onClick={() => saveItems()}>
          Incluir Cliente
        </button>
      </form>
    </div>
  );
};

export default Clientes;
