import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Header from './componentes/Header';
import Navegation from './componentes/Navegation';
import Footer from './componentes/Footer';


import Inicio from './paginas/Inicio';
import AboutUs from './paginas/AboutUs';
import Portafolio from './paginas/Portafolio';
import Contacto from './paginas/Contacto';


function App() {
  return (
    <Router>
      <div>
        <Header /><br />
        <Navegation />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/portafolio" element={<Portafolio/>} />
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
        <Footer />

       </div>
    </Router>
  );
}

export default App;
