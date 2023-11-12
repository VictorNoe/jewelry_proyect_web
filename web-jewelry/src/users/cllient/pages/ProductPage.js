
import {Col, Container, Image, Row} from "react-bootstrap";
import {CardProductPrice} from "../componests/product/CardProductPrice";

export const ProductPage = () => {

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
                                    <Image src={"https://belcorpmexico.vtexassets.com/arquivos/ids/929109-1600-auto?v=638242849830470000&width=1600&height=auto&aspect=true"} className="imageProductId "/>
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