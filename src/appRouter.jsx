import React, {useContext, useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";


import { Home } from "./home/home";
import { Faq } from "./faq/faq";
import { Locations } from "./locations/locations";
import { Fleet } from "./fleet/fleet";
import { Login } from "./login/login";
import { Register } from "./login/register";

export const AppRouter = () => {


    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/locations' element={<Locations />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/fleet' element={<Fleet />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>

        </BrowserRouter>
    )
}

