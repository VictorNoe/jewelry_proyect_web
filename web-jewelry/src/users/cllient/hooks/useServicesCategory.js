import {useContext} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";

export const useServicesCategory = () => {

    const { user } = useContext( AuthContext );

    const getCategory = async () => {
        await fetch(`http://localhost:8080/api/category/`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${user?.token}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.data.statusCode === 200) {

                }
            })
            .catch((err) => console.log(err));
    }

    return {
        getCategory
    }
}