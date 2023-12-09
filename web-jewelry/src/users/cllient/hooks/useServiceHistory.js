import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";

export const useServiceHistory = () => {

    const {user} = useContext(AuthContext);
    const [history ,setHistory] = useState([]);
    const [subSale, setSubeSale] = useState([]);
    const [statusSubSale,setStatusSubSale] = useState(false);

    const getSubeSale = async (id) => {
        await fetch(`http://localhost:8080/api/sales/subsales`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                "idSale": id
            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                if(data.statusCode === 200){
                    setSubeSale(data.data);
                    setStatusSubSale(true)
                }
            })
    }
    const getHistory = async () => {
        await fetch(`http://localhost:8080/api/sales/historial`, {
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
        history,
        getSubeSale,
        subSale,
        statusSubSale,
        setStatusSubSale
    }
}