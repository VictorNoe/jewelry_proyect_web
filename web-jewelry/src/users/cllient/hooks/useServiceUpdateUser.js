import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";
import {toast} from "sonner";

export const useServiceUpdateUser = () => {

    const { user } = useContext( AuthContext )
    const [ clientInfo, setCLientInfo] = useState([]);

    const updatePassaworUser = async (new_passwors,old_password) => {
        await fetch(`http://localhost:8080/api/users/updatePassword`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                "email": clientInfo?.email,
                "old_password": old_password,
                "new_password": new_passwors
            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                if (data.statusCode === 200) {
                    toast.success('Contraeña Actualizada')
                    getUser()
                } else if (data.statusCode !== 200){
                    toast.error('Fallo en la actualización')
                }
            })
            .catch((err) => console.log(err));
    }

    const updateUser = async (name, lastNameM, lastNameP, address) => {
        console.log(name, lastNameM, lastNameP, address)
        await fetch(`http://localhost:8080/api/users/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                "email": clientInfo?.email,
                "password": clientInfo?.password,
                "name": name,
                "surname": lastNameM,
                "second_surname": lastNameP,
                "address": address,
                "rol": {
                    "id": 1
                },
                "status": {
                    "id": 1
                }
            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                if (data.statusCode === 200) {
                    toast.success('Informacion Actualizada')
                    getUser()
                } else if (data.statusCode !== 200){
                    toast.error('Fallo en la actualización')
                }
            })
            .catch((err) => console.log(err));
    }

    const getUser = async () => {
        await fetch(`http://localhost:8080/api/users/${user?.email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data.data)
                setCLientInfo(data.data)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getUser();
    }, [])

    return{
        clientInfo,
        updateUser,
        updatePassaworUser
    }
}