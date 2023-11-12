import {Navigate, Route, Routes} from "react-router-dom";
import {NavbarAdmin} from "../componests/NavbarAdmin";
import {HomeProducts} from "../../cllient/pages/HomeProducts";

export const AdminRoutes = () => {
    return (
        <>

            <NavbarAdmin/>

            <Routes>
                <Route path="*" element={<HomeProducts/>}/>
                <Route path="provedores"/>
                <Route path="*" element={<Navigate to={"/adminHome"}/>}/>
            </Routes>w

        </>
    )
}