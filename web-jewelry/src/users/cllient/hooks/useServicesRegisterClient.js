
import swal from "sweetalert";
import {useServicesIdPerson} from "./useServicesIdPerson";

export const useServicesRegisterClient = () => {

    const { getLogin } = useServicesIdPerson();

    const insert = async (email, name, lastNameP,  lastNameM, password, address) => {
        await fetch("http://localhost:8080/api/users/", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "name": name,
                "surname": lastNameP,
                "second_surname": lastNameM,
                "address": address,
                "rol": {
                    "id": 2
                },
                "status": {
                    "id": 1
                }
            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.statusCode === 200) {
                    swal({
                        title: "Exito",
                        text: "Se registro tu cuenta exitosamente",
                        icon: "success",
                        button: false,
                        timer: 3000
                    });
                    setTimeout(() => {
                        getLogin(email, password);
                    }, "3000");
                }

                if (data.statusCode !== 200) {
                    swal({
                        title: "Registro fallido",
                        text: `${data?.message}`,
                        icon: "warning",
                        button: false,
                        timer: 3000
                    });
                }
            })
    }

    return {
        insert
    }
}