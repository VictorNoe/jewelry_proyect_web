import {Col, Container, Row} from "react-bootstrap";
import "../css/index.css"
import {CardTotalDisabled} from "../componests/cart/CardTotalDisabled";
import {CardProductoCart} from "../componests/cart/CardProductoCart";

export const ShoppingCart = () => {
    return (
        <Container fluid className="homeProductPadding homeProductScroll">
            <Row>
                <Col sm={8}>
                    <CardProductoCart/>
                </Col>
                <Col sm={4}>
                    <CardTotalDisabled/>
                </Col>
            </Row>
        </Container>
    )
}