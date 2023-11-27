import {Button, Col, Container, Form, Image, InputGroup, Row} from "react-bootstrap";
import {usePrice} from "../../hooks/usePrice";

export const ProductCard = ( {id, image, name, stock, price, discount, amount, id_cart} ) => {

    const { item, removeItem, addItem, deleteProduct } = usePrice(amount, id_cart, id);

    return (
        <Container>
            <Row className="cardDontProductContainer animate__animated animate__fadeInDown">
                <Col xs={2}>
                    <Image className="imgAdapterCard" src={image}/>
                </Col>
                <Col xs={6}>
                    <Row>
                        <Col xs={12}>{name}</Col>
                        <Col xs={12}>
                            <Button className="nav-link" variant="link" onClick={()=> deleteProduct(id_cart)}>Eliminar</Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={2} className="text-center">
                    <Row>
                        <Col xs={12}>
                            <InputGroup className="mb-3 inputCounter">
                                <Button variant="link" className="nav-link" style={{width: "40px"}} onClick={()=> removeItem(1)} disabled={item === 1}>
                                    -
                                </Button>
                                <Form.Control
                                    aria-label="Example text with button addon"
                                    aria-describedby="basic-addon1"
                                    className="text-center border border-0"
                                    defaultValue={item}
                                    value={item}
                                    inputMode={"numeric"}
                                />
                                <Button variant="link" className="nav-link" style={{width: "40px"}} onClick={() => addItem(1)} disabled={stock === item}>
                                    +
                                </Button>
                            </InputGroup>
                        </Col>
                        <Col xs={12}>{stock} disponibles</Col>
                    </Row>
                </Col>
                <Col xs={2} className="text-end">
                    { discount > 0
                        ? `$${discount * item}.00`
                        : `$${price * item}.00`
                    }
                </Col>
            </Row>
        </Container>
    )
}