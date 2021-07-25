import React, { useState } from "react";

const Produtos = (props) => {
  const [form, setForm] = useState({});
  const handleInput = function (ev, key) {
    ev.preventDefault();
    setForm({ ...form, [key]: ev.target.value });
  };

  const saveItems = function () {
    localStorage.setItem("produto", JSON.stringify(form));
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label for="email">Nome do Produto</label>
          <input
            type="text"
            className="form-control"
            onChange={(ev) => handleInput(ev, "name")}
            id="produto"
          />
        </div>
        <div className="form-group">
          <label for="codigo">Código do Produto</label>
          <input
            onChange={(ev) => handleInput(ev, "codigo")}
            type="number"
            className="form-control"
            id="codigo"
          />
        </div>
        <div className="form-group">
          <label for="tel">Preço</label>
          <input
            onChange={(ev) => handleInput(ev, "preco")}
            type="number"
            className="form-control"
            id=" preco"
          />
        </div>
        <div className="form-group">
          <label for="name">Categoria</label>
          <input
            onChange={(ev) => handleInput(ev, "categoria")}
            type="text"
            className="form-control"
            id="categoria"
          />
        </div>
        <div className="form-group">
          <label for="endereço">Descrição</label>
          <input
            onChange={(ev) => handleInput(ev, "descricao")}
            type="text"
            className="form-control"
            id="categoria"
          />
        </div>
      </form>
      <button className="btn mr-5" onClick={() => saveItems()}>
        Incluir Produto
      </button>
    </div>
  );
};

export default Produtos;
