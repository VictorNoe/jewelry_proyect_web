import {Navigate, Route, Routes} from "react-router-dom";
import {NavbarAdmin} from "../componests/NavbarAdmin";
import {HomeProducts} from "../../cllient/pages/HomeProducts";
import {Supplier} from "../pages/Supplier";
import {AdminProducts} from "../pages/AdminProducts";
import {Users} from "../pages/Users";

export const AdminRoutes = () => {
    return (
        <>

            <NavbarAdmin/>

            <Routes>
                <Route path="*" element={<HomeProducts/>}/>
                <Route path="proveedores" element={<Supplier/>}/>
                <Route path="*" element={<Navigate to={"/adminHome"}/>}/>
                <Route path="productos" element={<AdminProducts/>}/>
                <Route path="usuarios" element={<Users/>}/>
            </Routes>

        </>
    )
}