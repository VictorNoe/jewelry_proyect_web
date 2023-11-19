
import {ProductsCards} from "../componests/product/ProductsCards";
import {Container, Row} from "react-bootstrap";
import "../css/index.css"
import {useServicesAllProducts} from "../hooks/useServicesAllProducts";
import {DontProducts} from "../componests/product/DontProducts";

export const HomeProducts = () => {

    const { products, isLoading, countProducts } = useServicesAllProducts();

    return (
        <>
            <Container fluid className="homeProductPadding homeProductScroll">
                <Row className="cardlPadding mb-3">
                    {
                        isLoading && ( <h2>Cargando...</h2> )
                    }
                    {
                        countProducts && (<DontProducts/>)
                    }

                    {
                        products.map( ({id_producto, nombre, descripcion, precio, foto, estatus }) => (
                            <ProductsCards
                                id = {id_producto}
                                name = {nombre}
                                description= {descripcion}
                                image={foto}
                                prices={precio}
                                status = {estatus}
                            />
                        ))
                    }

                </Row>
            </Container>
        </>
    )
}