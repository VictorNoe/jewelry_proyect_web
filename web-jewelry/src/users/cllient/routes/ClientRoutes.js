import {NavbarClient} from "../componests/NavbarClient";
import {Navigate, Route, Routes} from "react-router-dom";
import {HomeProducts} from "../pages/HomeProducts";
import {LoginPage} from "../../../auth/pages/LoginPage";
import {ShoppingCart} from "../pages/ShoppingCart";
import {PrivateRoute} from "../../../router/PrivateRoute";
import {PublicRoute} from "../../../router/PublicRoute";
import {PorfielClient} from "../pages/PorfielClient";
import {History} from "../pages/History";
import {ProductPage} from "../pages/ProductPage";
import {Register} from "../pages/Register";
import {RecoverPasswordPage} from "../../../auth/pages/RecoverPasswordPage";
import {UserProviderCart} from "../context/userProviderCart";

export const ClientRoutes = () => {
    return (
        <UserProviderCart>
            <NavbarClient/>

            <Routes>
                <Route path="home" element={<HomeProducts/>}/>
                <Route path="login/*" element={
                    <PublicRoute>
                        <Routes>
                            <Route path="*" element={<LoginPage/>}/>
                            <Route path="register" element={<Register/>}/>
                            <Route path="recover" element={<RecoverPasswordPage/>}/>
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
                            <Route path="history" element={<History/>}/>
                        </Routes>
                    </PrivateRoute>
                }/>
                <Route path="/" element={<Navigate to={"/home"} />}/>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
        </UserProviderCart>
    )
}