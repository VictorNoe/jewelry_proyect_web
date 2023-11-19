import {Alert, Button, Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {useServicesIdProduct} from "../../hooks/useServicesIdProduct";
import {ButtomCard} from "./ButtomCard";

export const CardProductPrice = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const { product} = useServicesIdProduct(id);

    if ( product === undefined ) {
        navigate("/home")
    }

    return (
        <Card style={{ width: 'auto'}}>
            <Card.Body>
                <Card.Title>{product.nombre}</Card.Title>
                <Card.Subtitle className="mb-4 text-muted">{  }</Card.Subtitle>
                <Card.Text>
                    { product.descripcion }
                </Card.Text>
                <Card.Title className="mt-5" >{`$${ product.precio }.00`}</Card.Title>
                <Card.Subtitle className="mb-2 mt-5 text-muted">Stock disponible</Card.Subtitle>
                <Row className="mt-3">
                    <Col xs={7}>
                        <Card.Subtitle className="mb-2 text-muted">Cantidad</Card.Subtitle>
                    </Col>
                    <Col xs={5}>
                        <InputGroup className="mb-3 inputCounter">
                            <Button variant="link" id="button-addon1" className="nav-link" style={{width: "40px"}}>
                                -
                            </Button>
                            <Form.Control
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                                placeholder="1"
                                className="text-center border border-0"
                                d
                            />
                            <Button variant="link" id="button-addon1" className="nav-link" style={{width: "40px"}}>
                                +
                            </Button>
                        </InputGroup>
                        <Card.Text className="text-center">
                            {`${ product.stock } disponibles`}
                        </Card.Text>
                    </Col>
                </Row>
                <Row className="text-center mt-4">
                    <Col xs={12}>
                        <ButtomCard
                            name = {"Comprar ahora"}
                            color = {"#882D38"}
                        />
                    </Col>
                    <Col xs={12}>
                        <ButtomCard
                            name = {"Agregar al carrito"}
                            color = {"#BC9709"}
                        />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}