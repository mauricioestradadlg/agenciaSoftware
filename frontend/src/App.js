import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

import Header from './componentes/Header';
import Navegation from './componentes/Navegation';
import Footer from './componentes/Footer';


import Inicio from './paginas/Inicio';
import AboutUs from './paginas/AboutUs';
import Portafolio from './paginas/Portafolio';
import Contacto from './paginas/Contacto';
import FormEnviado from './paginas/FormEnviado';
import Blog from './paginas/Blog';


import PrimerBlog from './blogs/PrimerBlog';

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
          <Route path="/formEnviado" element={<FormEnviado />} />
          <Route path="/blog" element={<Blog/>}/>

          <Route path="/blog/primerBlog" element={<PrimerBlog/>}/>
        </Routes>
        <Footer />

       </div>
    </Router>
  );
}

export default App;
