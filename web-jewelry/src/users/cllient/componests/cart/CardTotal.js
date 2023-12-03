import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useContext, useState} from "react";
import {UseContextCart} from "../../context/useContextCart";
import {useServiceShopping} from "../../hooks/useServiceShopping";

export const CardTotal = () => {

    const [state, setState] = useState(false);
    const {item, total, subTotal} = useContext(UseContextCart);
    const {sendCompra} = useServiceShopping();

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col xs={12} className="mb-3">Productos</Col>
                        <Col xs={12} className="mb-3">Subtotal</Col>
                        <Col xs={12} className="mb-3">Total</Col>
                    </Row>
                </Col>
                <Col>
                    <Row className="text-end">
                        <Col xs={12} className="mb-3">{item}</Col>
                        {subTotal !== total
                            ? <Col xs={12} className="mb-3" style={{color: "red"}}>${subTotal}.00</Col>
                            : <Col xs={12} className="mb-3">${subTotal}.00</Col>
                        }
                        <Col xs={12}>${total}.00</Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mb-3">
                {subTotal !== total && <Col xs={12} className='mb-3'>Se te a aplicado un descuento del 5%</Col>}
                <Col>
                    <Form.Check // prettier-ignore
                        type={"checkbox"}
                        id={`sendEmail`}
                        label={`Recivir comprobante de compra por email`}
                        onClick={(event)=> setState(event.target.checked)}
                    />
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <Button
                        size="lg"
                        variant="primary"
                        type="submit"
                        style={{background: "#882D38", borderColor: "#882D38", width: "100%"}}
                        onClick={()=>sendCompra(state)}
                    >
                        Realizar compra
                    </Button>
                </Col>
            </Row>

        </Container>
    )
}