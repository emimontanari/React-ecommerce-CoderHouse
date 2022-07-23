import './NavBar.css'
import Logo from '../../img/logo.jpg'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({cantidad}) => {
    
  return (
    <header className="header">
        <div className="logo">
            <img src={Logo} alt="" className="logo-img"/>
        </div>

        <div className="menu">
            <ul className="menu-list">
                <li className="menu-list-item"><a href="#">Inicio</a></li>
                <li className="menu-list-item"><a href="#">Productos</a></li>
                <li className="menu-list-item"><a href="#">Nosotros</a></li>
                <li className="menu-list-item"><a href="#">Contacto</a></li>
            </ul>
        </div>
        <CartWidget cantidad={cantidad}/>
    </header>
  )
}

export default NavBar