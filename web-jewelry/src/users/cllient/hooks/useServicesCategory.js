import {useEffect, useState} from "react";

export const useServicesCategory = () => {

    const [category, setCategory] =  useState([]);

    const getCategory = async () => {
        await fetch(`http://localhost:8080/api/category/`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.statusCode === 200) {
                    setCategory(data.data)
                }
            })
            .catch((err) => console.log(err));
    }

    useEffect(()=>{
        getCategory();
    },[])

    return {
        category
    }
}