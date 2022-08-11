import { Link, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from '../../assets/img/logo.jpg'
import CartWidget from '../Cart/CartWidget'
import '../Cart/Cart.css'

const NavBar = ({cartCount}) => {
	return (
        <>
            <Navbar bg="black" variant="dark" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <img
                                src={logo}
                                width="100"
                                height="100"
                                className="d-inline-block align-top"
                                alt="Snekers ecommerce Logo"
                            />
                        </Navbar.Brand>
                    </Link>
                    <Link className="cart-mobile" style={{paddingRight:'2rem'}} to="/cart">
                        <CartWidget cartCount={cartCount} />
                    </Link> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-around" id="basic-navbar-nav">
                        <Nav className="align-items-center">
                            <NavLink className="nav-link" to="/">
                                INICIO
                            </NavLink>
                            <NavLink className="nav-link" to="/categoria/nike">
                               NIKE
                            </NavLink>
                            <NavLink className="nav-link" to="/categoria/jordan">
                                JORDAN
                            </NavLink>
                            <NavLink className="nav-link" to="/categoria/yeezy">
                            YEEZY
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Link className="cart-desktop" to="/cart">
                        <CartWidget cartCount={cartCount} />
                    </Link> 
                </Container>
            </Navbar>
        </>
	);
};

export default NavBar;
