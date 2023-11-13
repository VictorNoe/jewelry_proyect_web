import {Navigate, Route, Routes} from "react-router-dom";
import {NavbarAdmin} from "../componests/NavbarAdmin";
import {HomeProducts} from "../../cllient/pages/HomeProducts";
import {Supplier} from "../pages/Supplier";
import {AdminProducts} from "../pages/AdminProducts";

export const AdminRoutes = () => {
    return (
        <>

            <NavbarAdmin/>

            <Routes>
                <Route path="*" element={<HomeProducts/>}/>
                <Route path="provedores" element={<Supplier/>}/>
                <Route path="*" element={<Navigate to={"/adminHome"}/>}/>
                <Route path="adminproducts" element={AdminProducts}/>
            </Routes>w

        </>
    )
}