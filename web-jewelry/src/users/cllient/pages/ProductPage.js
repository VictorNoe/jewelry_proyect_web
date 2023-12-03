
import {Col, Container, Image, Row} from "react-bootstrap";
import {CardProductPrice} from "../componests/product/CardProductPrice";
import {useServicesIdProduct} from "../hooks/useServicesIdProduct";
import {useParams} from "react-router-dom";
import {DontProducts} from "../componests/product/DontProducts";
import '../css/SeeProduct.css'

export const ProductPage = () => {


    const {id} = useParams();
    const { product,countProducts,isLoading } = useServicesIdProduct(id);

    return (
        <Container>
            <Row style={{height: "5vh"}}>

            </Row>
            {isLoading && (<span className='loader'></span>)}
            {countProducts && (<DontProducts/>)}
            {}
            <Row>
                <Col>
                    <Row className="pageProductId">
                        <Col>
                            <Row>
                                <Col xs={8} className="containerProductId animate__animated animate__fadeIn">
                                    <Image src={product?.image} className="imageProductId "/>
                                </Col>
                                <Col xs={4}>
                                    <div style={{height: "5vh"}}></div>
                                    <CardProductPrice
                                        image = {product?.image}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}