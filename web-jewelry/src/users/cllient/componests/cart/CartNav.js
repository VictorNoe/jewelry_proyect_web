import {Button,  NavDropdown} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../../../auth/context/AuthContext";

export const CartNav = () => {

    const navigate = useNavigate();
    const  { logout } = useContext( AuthContext );
    const onLoggad = () => {
        logout()
        navigate('/', {
            replace: true
        })
    }

    return (
      <NavDropdown title="" id="collapsible-nav-dropdown"
                   drop="down"
                   className="text-white"
                   align={{ lg: 'end' }}>
          <NavDropdown.Item>
              <Link to="/porfile" className="nav-link text-center">
                  Mi Perfil
              </Link>
          </NavDropdown.Item>
          <NavDropdown.Divider/>
          <div className="text-center mb-2 mt-2">
              <Button
                  type="submit"
                  style={{background: "#882D38", borderColor: "#882D38"}}
                  onClick={onLoggad}
              >
                  Cerrar Sesíon
              </Button>
          </div>
      </NavDropdown>
    )
}