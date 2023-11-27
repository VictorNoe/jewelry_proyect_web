import {Col, Container, Image, Row, Table} from "react-bootstrap";
import {useServiceHistory} from "../../hooks/useServiceHistory";

export const ListHistoryUser = () => {

    const {history} = useServiceHistory()

    return (
        <Container style={{height:"80vh", overflow: "auto"}}>
            {history.map((his)=> (
                <Row key={his?.id} className="cardDontProductContainer animate__animated animate__fadeInDown text-center" >
                    <Col xs={2}>
                        <Image className="imgAdapterCard" src={"https://static.vecteezy.com/system/resources/previews/014/679/776/non_2x/cardboard-box-icon-cartoon-style-vector.jpg"}/>
                    </Col>
                    <Col xs={4}>{his?.purchase_date}</Col>
                    <Col xs={3}>{his?.subtotal}</Col>
                    <Col xs={3}>{his?.total}</Col>
                </Row>
            ))}
        </Container>
    )
}