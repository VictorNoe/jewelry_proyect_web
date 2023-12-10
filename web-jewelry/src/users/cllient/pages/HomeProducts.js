
import {ProductsCards} from "../componests/product/ProductsCards";
import {Container, Row} from "react-bootstrap";
import "../css/index.css"
import {DontProducts} from "../componests/product/DontProducts";
import {Loading} from "../componests/Loading";
import {useContext} from "react";
import {UseContextProducts} from "../context/useContextProducts";
import {UseContextCart} from "../context/useContextCart";

export const HomeProducts = () => {

    const { products, isLoading, countProducts } = useContext(UseContextCart);

    return (
        <>
            <Container fluid className="homeProductPadding homeProductScroll">
                <Row className="cardlPadding mb-3">
                    {
                        isLoading && (<Loading/>)
                    }
                    {
                        countProducts && (<DontProducts/>)
                    }

                    {
                        products.map( ({id, name, description, price, image, status, discount_price}) => (
                            <ProductsCards
                                id = {id}
                                name = {name}
                                description= {description}
                                image={image}
                                prices={price}
                                status = {status}
                                discount = {discount_price }
                            />
                        ))
                    }

                </Row>
            </Container>
        </>
    )
}