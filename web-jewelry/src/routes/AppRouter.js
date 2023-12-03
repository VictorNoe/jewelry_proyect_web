import {Routes, Route, Navigate} from "react-router-dom";
import {ClientRoutes} from "../users/cllient/routes/ClientRoutes";
import {PrivateRouteAdmin} from "./PrivateRouteAdmin";
import {AdminRoutes} from "../users/admin/routes/AdminRoutes";
import {useContext} from "react";
import {AuthContext} from "../auth/context/AuthContext";
import {PublicRoutes} from "./PublicRoutes";


export const AppRouter = () => {
    const {user} = useContext(AuthContext)

    return(
        <>
            <Routes>
                {
                    !user && <Route path="/*" element={<PublicRoutes/>}/>
                }
                {
                    (user && user?.role === 2) && <Route path="/*" element={<ClientRoutes/>}/>
                }
                {
                    (user && user?.role === 1) && <Route path="/*" element={<AdminRoutes/>}/>
                }
                <Route path="*" element={<Navigate to={"/"}/>}/>
            </Routes>

        </>
    )
}