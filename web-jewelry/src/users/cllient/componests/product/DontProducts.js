import {Col, Container, Image, Row} from "react-bootstrap";
import imageProduct from "../../../../image/Wavy_Med-10_Single-03.jpg"
export const DontProducts = ({name}) => {
    return (
        <Container>
            <Row className="cardDontProductCenter">
                <Col>
                    <Image src={imageProduct} style={{width: "300px", height: "auto"}}/>
                    <h5>Lo sentimos</h5>
                    <p>{`Lamentablemente no se ha encontrado ningun`}</p>
                    <p>{`resultado de la busque que quiere realizar`}</p>
                </Col>
            </Row>
        </Container>
    )

}