import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Pedidos from "./components/Pedidos/PaginaPedidos/index";
import Main from "./components/Main/index";
import Clientes from "./components/Clientes/PaginaClientes";
import Itens from "./components/Itens/PaginaItens";
import Pagamentos from "./components/Pagamentos/PaginaPagamentos";
import Registrar from "./components/Sing";


const Appl: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<Login />} exact />
                <Route path="/register" element={<Registrar />} />
                <Route path="/" element={<Main />} />
                <Route path="/pedidos" element={<Pedidos />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/itens" element={<Itens />} />
                <Route path="/pagamentos" element={<Pagamentos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Appl;