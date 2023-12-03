import { Button, Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {useServicesIdProduct} from "../../hooks/useServicesIdProduct";
import {useContext, useState} from "react";
import {AuthContext} from "../../../../auth/context/AuthContext";
import {useServicesAddCart} from "../../hooks/useServicesAddCart";
import Swal from "sweetalert2";

export const CardProductPrice = () => {

    const {id} = useParams();
    const { product} = useServicesIdProduct(id);
    const { user } = useContext( AuthContext )
    const [counterProduct, setCounterProduct] = useState(1);
    const { addProduct, buyOneProduct } = useServicesAddCart()
    const navigate = useNavigate()

    
    const ventaOne = () => {
        Swal.fire({
            title: "Aviso",
            text: "¿Seguro que quieres comprar de este producto?",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: "#882D38",
            confirmButtonText: "realizar compra",
            cancelButtonText: "cancelar",
            preConfirm: async () => {
                if (product?.discount_price > 0) {
                    buyOneProduct(id, product?.discount_price);
                } else {
                    buyOneProduct(id, product?.price);
                }
            },
            allowOutsideClick: () => !Swal.isLoading()

        });
    }
    const cunterAdd = () => {
        setCounterProduct(counterProduct + 1)
    }

    const cunterRemove = () => {
        setCounterProduct(counterProduct - 1)
    }

    const validateAddProduct = () => {
        if (user) {
            addProduct(counterProduct, id)
        } else {
            Swal.fire({
                icon: "question",
                title: "¿Aun no tienes cuenta?",
                text: "¡Crea una cuenta para comprar ahora mismo!",
                value: navigate('/login/register', {replace: true}),
                showConfirmButton: false,
                timer: 3000
            });
        }
    }

    if ( product === undefined ) {
        navigate("/home")
    }

    return (
        <Card style={{ width: 'auto'}}>
            <Card.Body>
                <Card.Title>{product?.name}</Card.Title>
                <Card.Subtitle className="mb-4 text-muted">{  }</Card.Subtitle>
                <Card.Text>
                    { product?.description }
                </Card.Text>
                <s className="mt-5" style={{color: "red"}}>{(product?.discount_price > 0 && user) && `$${product?.price}.00`}</s>
                { (product?.discount_price > 0 && user)
                    ? <Card.Title className="mt-1">{`$${product?.discount_price}.00`}</Card.Title>
                    : <Card.Title className="mt-5">{`$${product?.price}.00`}</Card.Title>
                }
                <Card.Subtitle className="mb-2 mt-5 text-muted">Stock disponible</Card.Subtitle>
                <Row className="mt-3">
                    <Col xs={7}>
                        <Card.Subtitle className="mb-2 text-muted">Cantidad</Card.Subtitle>
                    </Col>
                    <Col xs={5}>
                        <InputGroup className="mb-3 inputCounter">
                            <Button
                                variant="link"
                                id="button-addon1"
                                className="nav-link"
                                style={{width: "40px"}}
                                onClick={cunterRemove}
                                disabled={counterProduct === 1}
                            >
                                -
                            </Button>
                            <Form.Control
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                                placeholder="1"
                                className="text-center border border-0"
                                value={counterProduct}
                            />
                            <Button
                                variant="link"
                                id="button-addon1"
                                className="nav-link"
                                style={{width: "40px"}}
                                onClick={cunterAdd}
                                disabled={counterProduct === product?.stock}
                            >
                                +
                            </Button>
                        </InputGroup>
                        <Card.Text className="text-center">
                            {`${ product?.stock } disponibles`}
                        </Card.Text>
                    </Col>
                </Row>
                <Row className="text-center mt-4">
                    <Col xs={12}>
                        <Button
                            size="lg"
                            type="submit"
                            className="mt-3"
                            style={{background: "#882D38", borderColor: "#882D38", width: "100%"}}
                            onClick={ventaOne}
                        >
                            Comprar ahora
                        </Button>
                    </Col>
                    <Col xs={12}>
                        <Button
                            size="lg"
                            type="submit"
                            className="mt-3"
                            style={{background: "#BC9709", borderColor: "#BC9709", width: "100%"}}
                            onClick={validateAddProduct}
                        >
                            Agregar al carrito
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}