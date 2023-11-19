import {Col, Container, Row} from "react-bootstrap";
import "../css/index.css"
import {CardTotalDisabled} from "../componests/cart/CardTotalDisabled";
import {CardProductoCart} from "../componests/cart/CardProductoCart";
import {useServicesCart} from "../hooks/useServicesCart";
import {useContext} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";

export const ShoppingCart = () => {
    const { user } = useContext(AuthContext)
    const { cart, state } = useServicesCart( user.email );

    return (
        <Container fluid className="homeProductPadding homeProductScroll">
            <Row>
                <Col sm={8}>
                    <CardProductoCart
                        state = {state}
                        cart ={cart}
                    />
                </Col>
                <Col sm={4}>
                    <CardTotalDisabled
                        state = {state}
                    />
                </Col>
            </Row>
        </Container>
    )
}