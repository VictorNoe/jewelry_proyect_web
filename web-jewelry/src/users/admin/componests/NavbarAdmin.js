import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {CartNav} from "../../cllient/componests/cart/CartNav";
import {useContext} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";

export const NavbarAdmin = () => {
    const {user} = useContext(AuthContext)
    return (
        <Navbar data-bs-theme="dark" className="navbarColor">
            <Container fluid>
                <Navbar.Brand>
                    <NavLink to="/" className="navbar-brand">
                        Administrador
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink to="usuarios" className="nav-link">
                                Gestion de usuarios
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="productos" className="nav-link">
                                Gestion de productos
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="proveedores" className="nav-link">
                                Gestion de proveedores
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className="navbar nav-link">

                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="navbar nav-link">
                            {
                                user?.status &&
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                     fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd"
                                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                {
                    user?.status &&
                    <CartNav/>
                }
            </Container>
        </Navbar>
    );
}