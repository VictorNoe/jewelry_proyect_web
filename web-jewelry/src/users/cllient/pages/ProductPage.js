
import {Alert, Col, Container, Image, Row} from "react-bootstrap";
import {CardProductPrice} from "../componests/product/CardProductPrice";
import {useServicesIdProduct} from "../hooks/useServicesIdProduct";
import {useParams} from "react-router-dom";

export const ProductPage = () => {

    const {id} = useParams();
    const { product} = useServicesIdProduct(id);

    return (
        <Container>
            <Row style={{height: "5vh"}}>

            </Row>
            <Row>
                <Col>
                    <Row className="pageProductId">
                        <Col>
                            <Row>
                                <Col xs={8} className="containerProductId animate__animated animate__fadeIn">
                                    <Image src={product.foto} className="imageProductId "/>
                                </Col>
                                <Col xs={4}>
                                    <div style={{height: "5vh"}}></div>
                                    <CardProductPrice/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}