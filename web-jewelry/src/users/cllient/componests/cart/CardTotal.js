import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useContext} from "react";
import {UseContextCart} from "../../context/useContextCart";
import Swal from "sweetalert2";
import {AuthContext} from "../../../../auth/context/AuthContext";
import {useNavigate} from "react-router-dom";

export const CardTotal = () => {

    const {user} = useContext(AuthContext)

    const navigate = useNavigate();

    const hol = () => {
        Swal.fire({
            title: "Aviso",
            text: "Una ves al dar a “realizar comprar” el proceso de compra no podra ser cancelar por ningun motivo.",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "realizar compra",
            showLoaderOnConfirm: true,
            cancelButtonText: "cancelar",
            confirmButtonColor: "#882D38",
            cancelButtonColor: "#882D38",
            preConfirm: async () => {
                try {
                    await fetch(`http://localhost:8080/api/sales/buycart`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${user?.token}`
                        },
                        body: JSON.stringify({
                            "email": user?.email
                        })
                    })
                        .then((resp) => resp.json())
                        .then((data) => {
                            console.log(data)
                            if (data.statusCode === 200) {
                                Swal.fire({
                                    icon: "success",
                                    title: "¡Compra Exitosa!",
                                    text: "Su compra se realizo de forma exitosa",
                                    showConfirmButton: false,
                                    timer: 3000
                                })
                                navigate("/")
                            }
                        })
                        .catch((err) => console.log(err));
                } catch (err) {

                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        })
    }
    const {item, total} = useContext(UseContextCart);

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col xs={12} className="mb-3">Productos</Col>
                        <Col xs={12} className="mb-3">Subtotal</Col>
                        <Col xs={12} className="mb-3">Total</Col>
                    </Row>
                </Col>
                <Col>
                    <Row className="text-end">
                        <Col xs={12} className="mb-3">{item}</Col>
                        <Col xs={12} className="mb-3">${total}.00</Col>
                        <Col xs={12}>${total}.00</Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Check // prettier-ignore
                        type={"checkbox"}
                        id={`sendEmail`}
                        label={`Recivir comprobante de compra por email`}
                    />
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <Button
                        size="lg"
                        variant="primary"
                        type="submit"
                        style={{background: "#882D38", borderColor: "#882D38", width: "100%"}}
                        onClick={hol}
                    >
                        Realizar compra
                    </Button>
                </Col>
            </Row>

        </Container>
    )
}