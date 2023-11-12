
import {ProductsCards} from "../componests/product/ProductsCards";
import {Container, Row} from "react-bootstrap";
import "../css/index.css"

export const HomeProducts = () => {
    return (
        <>
            <Container fluid className="homeProductPadding homeProductScroll">
                <Row className="cardlPadding mb-3">
                    <ProductsCards/>
                </Row>
            </Container>
        </>
    )
}