import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {useServiceApartados} from "../hooks/useServiceApartados";
import {DontProducts} from "../componests/product/DontProducts";
import {Toaster} from "sonner";

export const Reservas = () => {
    const { apartados, status,updateApartado, updateApartBuy } = useServiceApartados()

    return(
        <Container style={{height: "90vh", overflowY: "hidden"}}>
            <Row style={{height: "10vh", overflowY: "hidden", borderColor: "transparent"}} className="text-center reserve">
                <Col>
                    Imagen
                </Col>
                <Col>
                    Nombre
                </Col>
                <Col>
                    Descripción
                </Col>
                <Col>
                    Price
                </Col>
                <Col>

                </Col>
            </Row>
            <Toaster richColors position="top-center"  expand={false}/>
            {
                status
                    ? <Row xs={1} md={12} className="g-4 mb-3 text-center" style={{height: "80vh", overflowY: "auto"}}>
                        {apartados.map((apart)=> (
                            <Col key={apart?.id}>
                                <Row className="reserve">
                                    <Col>
                                        <Image src={apart?.product.image} style={{width: "150px", borderRadius: "100%", border:"1px gray solid"}}/>
                                    </Col>
                                    <Col>
                                        {apart?.product.name}
                                    </Col>
                                    <Col>
                                        {apart?.product.description}
                                    </Col>
                                    <Col>
                                        ${apart?.product.price}.00
                                    </Col>
                                    <Col>
                                        <Button variant="link" style={{textDecoration: "none", color: "#882d38"}} onClick={() => updateApartBuy(apart?.id) }>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                                 className="bi bi-bag-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                                            </svg>
                                            {' '}
                                            Comprar
                                        </Button>
                                        {' '}
                                        <Button variant="link" style={{textDecoration: "none", color: "gray"}} onClick={() => updateApartado(apart?.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                                 className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                <path
                                                    d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                            </svg>
                                            {' '}
                                            Eliminar
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                </Row>
                            </Col>
                        ))}
                    </Row>
                    : <><DontProducts/></>
            }
        </Container>
    )
}