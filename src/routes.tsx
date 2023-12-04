import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login-Register/Login";
import Pedidos from "./components/Pedidos/PaginaPedidos/index";
import Main from "./components/Main/index";
import Clientes from "./components/Clientes/PaginaClientes";
import Itens from "./components/Itens/PaginaItens";
import Registrar from "./components/Login-Register/Register";


const Appl: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} exact={true} />
                <Route path="/register" element={<Registrar />} />
                <Route path="/home" element={<Main />} />
                <Route path="/pedidos" element={<Pedidos />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/itens" element={<Itens />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Appl;