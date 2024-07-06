import { Link } from 'react-router-dom';


function Navegation(){

    
    return(<>

        <nav className='navbar'>
            <ul>
                <li><Link to = "/">Inicio</Link></li>
                <li><Link to = "/aboutus">Sobre Nosotros</Link></li>
                <li><Link to = "/portafolio">Portafolio</Link></li>
                <li><Link to = "/contacto">Contacto</Link></li>
            </ul>
        </nav>
    
        </>);

}

export default Navegation