import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Pedidos from "./components/Pedidos/index";
import Main from "./components/Main/index";
import Clientes from "./components/Clientes";
import Itens from "./components/Itens";
import Pagamentos from "./components/Pagamentos";

const Appl: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} exact />
                <Route path="/pedidos" element={<Pedidos />} />
                <Route path="/clientes" element={<Clientes />} />
                <Route path="/itens" element={<Itens />} />
                <Route path="/pagamentos" element={<Pagamentos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Appl;