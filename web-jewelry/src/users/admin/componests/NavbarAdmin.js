import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export const NavbarAdmin = () => {
    return (
        <Navbar data-bs-theme="dark" className="navbarColor">
            <Container fluid>
                <Navbar.Brand>
                    <NavLink to="/" className="navbar-brand">
                        Administrador
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink to="HomeAdmin" className="nav-link">
                                Gestion de usuarios
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="HomeAdmin" className="nav-link">
                                Gestion de productos
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="HomeAdmin" className="nav-link">
                                Gestion de proveedores
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="HomeAdmin" className="nav-link">
                                Gestion de ofertas
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}