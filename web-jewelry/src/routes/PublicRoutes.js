import {NavbarClient} from "../users/cllient/componests/NavbarClient";
import {Navigate, Route, Routes} from "react-router-dom";
import {HomeProducts} from "../users/cllient/pages/HomeProducts";
import {PublicRoute} from "./PublicRoute";
import {LoginPage} from "../auth/pages/LoginPage";
import {Register} from "../users/cllient/pages/Register";
import {RecoverPasswordPage} from "../auth/pages/RecoverPasswordPage";
import {ProductPage} from "../users/cllient/pages/ProductPage";
import {PrivateRouteClient} from "./PrivateRouteClient";
import {PorfielClient} from "../users/cllient/pages/PorfielClient";
import {ShoppingCart} from "../users/cllient/pages/ShoppingCart";
import {History} from "../users/cllient/pages/History";
import {UserProviderCart} from "../users/cllient/context/userProviderCart";

export const PublicRoutes = () => {
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
                <Route path="/" element={<Navigate to={"/home"} />}/>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
        </UserProviderCart>
    )
}