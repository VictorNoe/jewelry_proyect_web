import {Button, CardText, Col, Container, Image, Row} from "react-bootstrap";
import carro from "../../../../image/warningCart.png"
import {useNavigate} from "react-router-dom";

export const DontProductCard = () => {

    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/", {
            replace: true
        })
    }

    return (
        <Container>
            <Row className="cardDontProductCenter">
                <Col>
                    <Image src={carro } style={{width: "126px", height: "127px"}}/>
                    <CardText className="mt-2">¡Empieza un carrito de comprar!</CardText>
                    <CardText className="mb-4" style={{color: "#BABABA"}}>Suma productos y compra la mejor joyeria</CardText>
                    <Button
                        size="lg"
                        type="submit"
                        onClick={navigateHome}
                        style={{background: "#882D38", borderColor: "#882D38"}}
                    >
                        Descubrir más produtos
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}