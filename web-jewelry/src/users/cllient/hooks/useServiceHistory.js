import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";

export const useServiceHistory = () => {

    const {user} = useContext(AuthContext);
    const [history ,setHistory] = useState([]);
    const getHistory = async () => {
        fetch(`http://localhost:8080/api/sales/historial`, {
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
                    setHistory(data.data);
                }
            })
            .catch((err) => console.log(err));
    }

    useEffect(()=>{
        getHistory()
    },[])
    return {
        history
    }
}