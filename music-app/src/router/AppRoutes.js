import React from "react";

import Search from '../pages/Search/Search'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastraUsuario2 from '../cadastraUsuario2/CadastraUsuario2';
import Login2 from '../login2/login2'

function AppRoutes() {
return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<CadastraUsuario2 />} />
            <Route path='/login' element={<Login2 />} />
            <Route path='/search' element={<Search />} /> <Route/>
        </Routes>
    </BrowserRouter>
    )
}
export default AppRoutes;