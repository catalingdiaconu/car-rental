import React from 'react';
import { Home } from './home/home'
import { Locations } from "./locations/locations";
import { Faq } from "./faq/faq";
import { Nav } from "./nav";
import { AppRouter } from "./appRouter";


function App() {
  return (
    <div>
        <Nav />
        <AppRouter />
    </div>
  );
}

export default App;
