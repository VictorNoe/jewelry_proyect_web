import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";

export const useServiceUpdateUser = () => {

    const { user } = useContext( AuthContext )
    const [ clientInfo, setCLientInfo] = useState([]);

    const updateUser = async (name, lastNameM, lastNameP, address) => {
        await fetch(`http://localhost:8080/api/users/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                "id": clientInfo?.id,
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
        updateUser
    }
}