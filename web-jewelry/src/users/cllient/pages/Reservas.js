import {Col, Container, Image, Row} from "react-bootstrap";
import {useServiceApartados} from "../hooks/useServiceApartados";

export const Reservas = () => {
    const { apartados } = useServiceApartados()
    console.log(apartados)
    return(
        <Container style={{height: "90vh", overflowY: "hidden"}}>
            <Row style={{height: "10vh", overflowY: "hidden"}} className="text-center">
                <Col>
                    Imagen
                </Col>
                <Col>
                    Nombre
                </Col>
                <Col>
                    Descripción
                </Col>
                <Col>
                    Price
                </Col>
                <Col>

                </Col>
            </Row>
            <Row xs={1} md={12} className="g-4 mb-3 text-center" style={{height: "80vh", overflowY: "auto"}}>
                {apartados.map((apart)=> (
                    <Col key={apart?.id}>
                        <Row className="reserve">
                            <Col>
                                <Image src={apart?.product.image} style={{width: "60px"}}/>
                            </Col>
                            <Col>
                                {apart?.product.name}
                            </Col>
                            <Col>
                                {apart?.product.description}
                            </Col>
                            <Col>
                                {apart?.product.price}
                            </Col>
                            <Col>
                                <button className="btn btn-sm btn-success">Comprar</button>

                                <button className="btn btn-sm btn-danger">Cancelar</button>
                            </Col>
                        </Row>
                        <Row>
                        </Row>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}