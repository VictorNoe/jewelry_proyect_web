
import {ProductsCards} from "../componests/product/ProductsCards";
import {Container, Row} from "react-bootstrap";
import "../css/index.css"
import {useServicesAllProducts} from "../hooks/useServicesAllProducts";
import {DontProducts} from "../componests/product/DontProducts";
import {Loading} from "../componests/Loading";

export const HomeProducts = () => {

    const { products, isLoading, countProducts } = useServicesAllProducts();

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