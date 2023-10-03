import React from "react";
import { BrowserRouter, Route, Routes   } from "react-router-dom";

import Pedidos from "./components/Pedidos/index";
import Main from "./components/Main/index";

const Appl: React.FC = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element = { <Main /> }   exact />
                <Route path="/pedidos" element = { <Pedidos /> }   />
            </Routes>
        </BrowserRouter>
   )
}

export default Appl;