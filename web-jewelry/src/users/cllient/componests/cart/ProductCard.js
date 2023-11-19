import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {Counter} from "./Counter";
import {usePrice} from "../../hooks/usePrice";

export const ProductCard = ( {id, image, name, stock, price} ) => {


    return (
        <Container key={id}>
            <Row className="cardDontProductContainer animate__animated animate__fadeInDown">
                <Col xs={2}>
                    <Image className="imgAdapterCard" src={image}/>
                </Col>
                <Col xs={6}>
                    <Row>
                        <Col xs={12}>{name}</Col>
                        <Col xs={12}>
                            <Button className="nav-link" variant="link">Eliminar</Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={2} className="text-center">
                    <Row>
                        <Col xs={12}>
                            <Counter
                                stock = {stock}
                                id = {id}
                            />
                        </Col>
                        <Col xs={12}>{stock} disponibles</Col>
                    </Row>
                </Col>
                <Col xs={2} className="text-end">${price}.00</Col>
            </Row>
        </Container>
    )
}