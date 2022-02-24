import CartWidget from "../CarritoWidget/CartWidget"
import "./NavBar.css"

function NavBar (){
    return (
      
        <div>
            <p>logo</p>
            <li>Inicio</li>
            <li>Blog</li>
            <li>Carrito</li>
            <CartWidget/> 
                    
        </div>
    )
}

export default NavBar;
