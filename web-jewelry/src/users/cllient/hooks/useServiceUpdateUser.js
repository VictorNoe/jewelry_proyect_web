import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";

export const useServiceUpdateUser = () => {

    const { user } = useContext( AuthContext )
    const [ clientInfo, setCLientInfo] = useState();

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
                setCLientInfo(data.data)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getUser();
    }, [])

    return{
        clientInfo
    }
}