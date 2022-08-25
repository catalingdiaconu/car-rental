import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import { Home } from "./home/home";
import { Faq } from "./faq/faq";
import { Locations } from "./locations/locations";

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/locations' element={<Locations />} />
                <Route path='/faq' element={<Faq />} />
            </Routes>

        </BrowserRouter>
    )
}

