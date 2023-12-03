import {Navigate, Route, Routes} from "react-router-dom";
import {NavbarAdmin} from "../componests/NavbarAdmin";
import {Supplier} from "../pages/Supplier";
import {AdminProducts} from "../pages/AdminProducts";
import {Users} from "../pages/Users";

export const AdminRoutes = () => {
    return (
        <>
            <NavbarAdmin/>

            <Routes>
                <Route path="home" element={<Supplier/>}/>
                <Route path="proveedores" element={<Supplier/>}/>
                <Route path="productos" element={<AdminProducts/>}/>
                <Route path="usuarios" element={<Users/>}/>
                <Route path="/" element={<Navigate to={"/home"} />}/>
            </Routes>

        </>
    )
}