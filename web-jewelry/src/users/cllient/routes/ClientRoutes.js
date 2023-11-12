import {NavbarClient} from "../componests/NavbarClient";
import {Navigate, Route, Routes} from "react-router-dom";
import {HomeProducts} from "../pages/HomeProducts";
import {LoginPage} from "../../../auth/pages/LoginPage";
import {ShoppingCart} from "../pages/ShoppingCart";
import {ClientRegister} from "../pages/ClientRegister";
import {PrivateRoute} from "../../../router/PrivateRoute";
import {PublicRoute} from "../../../router/PublicRoute";
import {PorfielClient} from "../pages/PorfielClient";
import {ShoppingHistory} from "../pages/ShoppingHistory";
import {ProductPage} from "../pages/ProductPage";
import {Register} from "../pages/Register";

export const ClientRoutes = () => {
    return (
        <>
            <NavbarClient/>

            <Routes>
                <Route path="home" element={<HomeProducts/>}/>
                <Route path="login/*" element={
                    <PublicRoute>
                        <Routes>
                            <Route path="*" element={<LoginPage/>}/>
                            <Route path="register" element={<Register/>}/>
                        </Routes>
                    </PublicRoute>
                }/>
                <Route path="product"/>
                <Route path="product/:id" element={<ProductPage/>}/>
                <Route path="/*" element={
                    <PrivateRoute>
                        <Routes>
                            <Route path="porfile" element={<PorfielClient/>}/>
                            <Route path="cart" element={<ShoppingCart/>}/>
                            <Route path="history" element={<ShoppingHistory/>}/>
                        </Routes>
                    </PrivateRoute>
                }/>
                <Route path="/" element={<Navigate to={"/home"} />}/>
            </Routes>
        </>
    )
}