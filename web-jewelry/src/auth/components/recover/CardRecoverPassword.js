import {Card} from "react-bootstrap";
import {FormRecover} from "./FormRecover";
import {Toaster} from "sonner";

export const CardRecoverPassword = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-center">Recuperación de contraseña</Card.Title>
                <Card.Text className="mt-4 mb-4">
                    Por favor ingrese su correo electronico. Recibirar en tu bandeja de correo elecctronico
                    la contraseña que tienes registrada.
                </Card.Text>
                <FormRecover/>
            </Card.Body>
        </Card>
    )
}