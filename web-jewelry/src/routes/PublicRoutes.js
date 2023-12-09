import {NavbarClient} from "../users/cllient/componests/NavbarClient";
import {Navigate, Route, Routes} from "react-router-dom";
import {HomeProducts} from "../users/cllient/pages/HomeProducts";
import {LoginPage} from "../auth/pages/LoginPage";
import {Register} from "../users/cllient/pages/Register";
import {RecoverPasswordPage} from "../auth/pages/RecoverPasswordPage";
import {ProductPage} from "../users/cllient/pages/ProductPage";
import {UserProviderCart} from "../users/cllient/context/userProviderCart";

export const PublicRoutes = () => {
    return (
        <UserProviderCart>
            <NavbarClient/>

            <Routes>
                <Route path="home" element={<HomeProducts/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="login/register" element={<Register/>}/>
                <Route path="login/recover" element={<RecoverPasswordPage/>}/>
                <Route path="product"/>
                <Route path="product/:id" element={<ProductPage/>}/>
                <Route path="*" element={<Navigate to={"/home"} />}/>
            </Routes>
        </UserProviderCart>
    )
}