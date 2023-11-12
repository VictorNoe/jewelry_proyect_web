import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../css/index.css"
import {useContext} from "react";
import {AuthContext} from "../../../auth/context/index";
import {CartNav} from "./cart/CartNav";

export const NavbarClient = () => {

    const  { user } = useContext( AuthContext );

    const counterProduct = 1

    return (
        <Navbar data-bs-theme="dark" className="navbarColor">
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/" className="navbar-brand" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                             className="bi bi-gem" viewBox="0 0 16 16">
                            <path
                                d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z"/>
                        </svg>
                        Jewelry
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="history" className="navbar nav-link">
                                Historial de compras
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link to="cart" className="navbar nav-link">
                                {
                                    user?.status &&
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                         className="bi bi-cart-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg>
                                }
                                {
                                    (counterProduct > 0 && user?.status) &&
                                    <span
                                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{counterProduct}<span
                                        className="visually-hidden">unread messages</span>
                                        </span>
                                }
                            </Link>
                        </Nav.Link>
                        <Nav.Link className="navbar nav-link">
                            {
                            !user?.status &&
                            <Link to="login" className="navbar nav-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                     fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd"
                                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                                   Inicia Sesion
                            </Link>
                            }
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
    )
}