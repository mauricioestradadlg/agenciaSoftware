import { Link } from 'react-router-dom';

export default function Footer(){

    return(<>

    <footer className="Footer">
    author: Tecnologias Estrada
        &copy; copyright reserved
        
        <br/>
        <div id ="divFooter">
            <a href ="https://www.instagram.com/tecnologiasestrada/"><img src ="./imagenes/instagram.png" alt ="instagram" width="50" height="50"/></a><br/>
            <a href ="https://www.facebook.com/profile.php?id=61562253226917&is_tour_dismissed"><img id="fb" src ="./imagenes/fb.png" alt ="instagram" width="30" height="30"/></a><br/>
            <Link to = "/blog"><h1 id ="blogFooter">Blog</h1></Link>
        </div>
    </footer>

    </>);

}
