import {Button, Form} from "react-bootstrap";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useServicesIdPerson} from "../../users/cllient/hooks/useServicesIdPerson";

export const LoginForm = () => {
    const [email, setEMail] = useState('');
    const [password, setPassword] = useState('');
    const { getUserId } = useServicesIdPerson()

    const onEmail= ({target}) => {
        setEMail(target.value)

    }
    const onPassword = ({target}) => {
        setPassword(target.value)

    }
    const onLogged = (event) => {
        event.preventDefault()
        getUserId( email, password )
    }

    return (
        <Form onSubmit={ onLogged }>
            <h1>Iniciar Sesión</h1>
            <Form.Group className="mb-3 mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Floating className="mb-3">
                    <Form.Control
                        required
                        id="floatingInputCustom4"
                        type="email"
                        placeholder="name@example.com"
                        onChange={event => onEmail(event) }
                    />
                    <label htmlFor="floatingInputCustom4">Ingresa correo</label>
                </Form.Floating>
                <Form.Label>Contraseña</Form.Label>
                <Form.Floating>
                    <Form.Control
                        required
                        id="floatingPasswordCustom2"
                        type="password"
                        placeholder="Password"
                        onChange={event => onPassword(event) }
                    />
                    <label htmlFor="floatingPasswordCustom2">Ingresa contraseña</label>
                </Form.Floating>
            </Form.Group>
            <div className="d-grid gap-2 col-6 mx-auto">
                <Button
                    size="lg"
                    variant="primary"
                    type="submit"
                    style={{background: "#882D38", borderColor: "#882D38"}}
                >
                    Iniciar Sesion
                </Button>
                <Form.Text className="text-muted text-center" >
                    <Link to="/login/recover" className="nav-link">
                        ¿Se te olvidó tu contraseña?
                    </Link>
                </Form.Text>
                <Form.Text className="text-muted text-center" >
                    <Link to="/login/register" className="nav-link">
                        ¿No tienes cuenta?
                    </Link>
                </Form.Text>
            </div>
        </Form>
    )
}