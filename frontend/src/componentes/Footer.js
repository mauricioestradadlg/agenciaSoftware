import { Link } from 'react-router-dom';

export default function Footer(){

    return(<>

    <footer className="Footer">
    author: Tecnologias Estrada
        &copy; copyright reserved
        
        <br/>
        <div id ="divFooter">
            <a href =""><img src ="./imagenes/instagram.png" alt ="instagram" width="50" height="50"/></a><br/>
            <a href =""><img id="fb" src ="./imagenes/fb.png" alt ="instagram" width="30" height="30"/></a><br/>
            <Link to = "/blog"><h1 id ="blogFooter">Blog</h1></Link>
        </div>
    </footer>

    </>);

}
