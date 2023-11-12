import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../../css/index.css"

export const ProductsCards = () => {
    return (
        <>
            <Col sm="2" className="animate__animated animate__fadeIn mt-3">
                <Link to={`/product/${ 1 }`} className="nav-link">
                    <Card>
                        <Card.Img className="imgAdapterProductsCard" variant="top" src="https://m.media-amazon.com/images/I/61bGuj2+hTL._AC_SY695_.jpg" style={{width: "100%", height: "200px", backgroundSize: "cover"}}/>
                        <Card.Body>
                            <Card.Title>Anillo de oro 18kl</Card.Title>
                            <Card.Text>
                                Anillo Ruso "Charlize" con 3 anillos en oro vermeil
                            </Card.Text>
                            <Card.Title>$2000.00</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </>
    )
}