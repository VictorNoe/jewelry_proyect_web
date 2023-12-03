import {UseContextCart} from "./useContextCart";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";

export const UserProviderCart = ({ children }) => {

    const {user} = useContext(AuthContext)
    const [total, setTotal] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const [item, setItem] = useState(0)
    const [data, setData] = useState(0)

    const getTotal = async () => {
        await fetch(`http://localhost:8080/api/cart/consult`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                "email": user?.email,
            }),
        })
            .then((response) => response.json())
            .then(({data}) => {
                let t = 0
                let l = 0
                for (let i=0; i < data.length; i++) {
                    if(data[i]?.products.discount_price > 0){
                        t = t + (data[i]?.products.discount_price * data[i]?.amount)
                        setSubTotal(t);
                        setTotal(t);
                    } else {
                        t = t + (data[i]?.products.price * data[i]?.amount)
                        setSubTotal(t)
                        setTotal(t);
                    }
                    l = l + data[i]?.amount
                    setItem(l)
                }

                if (t > 10000) {
                    t = (t)-((t * 5) / 100)
                    t = Math.trunc(t)
                    setTotal(t)
                }
                setData(data.data)
            })
            .catch((err) => console.log(err));
    }

    useEffect(()=> {
        getTotal();
    },[])

    return (
        <UseContextCart.Provider value={{data, item, total, subTotal, getTotal}}>
            {children}
        </UseContextCart.Provider>
    )
}