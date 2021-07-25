import "./App.css";
import Clientes from "./componentes/Clientes.js";
import Produtos from "./componentes/Produtos.js";
import { useState } from "react";

function App() {
  const [stateCli, setStateCli] = useState(false);
  const [stateProd, setStateProd] = useState(false);

  const toggleCli = function () {
    setStateCli(true);
    setStateProd(false);
  };
  const toggleProd = function () {
    setStateProd(true);
    setStateCli(false);
  };

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand " href="#">
          Área de Cadastro
        </a>
      </nav>
      <div className="container">
        <div className="row content">
          <div class="col-sm b">
            <button
              type="button"
              onClick={() => toggleCli()}
              class="btn btn-info"
            >
              Cadastro de Cliente
            </button>
          </div>
          <div class="col-sm">
            <button
              type="button"
              onClick={() => toggleProd()}
              class="btn btn-info"
            >
              Cadastro de Produto
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-2">
            {stateCli && <Clientes />}

            {stateProd && <Produtos />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
