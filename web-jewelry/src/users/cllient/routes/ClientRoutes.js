import {NavbarClient} from "../componests/NavbarClient";
import {Navigate, Route, Routes} from "react-router-dom";
import {HomeProducts} from "../pages/HomeProducts";
import {ShoppingCart} from "../pages/ShoppingCart";
import {PorfielClient} from "../pages/PorfielClient";
import {History} from "../pages/History";
import {ProductPage} from "../pages/ProductPage";
import {UserProviderCart} from "../context/userProviderCart";
import {Reservas} from "../pages/Reservas";

export const ClientRoutes = () => {
    return (
        <UserProviderCart>
            <NavbarClient/>

            <Routes>
                <Route path="home" element={<HomeProducts/>}/>
                <Route path="product"/>
                <Route path="product/:id" element={<ProductPage/>}/>
                <Route path="porfile" element={<PorfielClient/>}/>
                <Route path="cart" element={<ShoppingCart/>}/>
                <Route path="history" element={<History/>}/>
                <Route path="separate" element={<Reservas/>}/>
                <Route path="*" element={<Navigate to={"/home"} />}/>
            </Routes>
        </UserProviderCart>
    )
}