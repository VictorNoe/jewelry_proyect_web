import {Routes, Route, Navigate} from "react-router-dom";
import {ClientRoutes} from "../users/cllient/routes/ClientRoutes";
import {PrivateRouteAdmin} from "./PrivateRouteAdmin";
import {AdminRoutes} from "../users/admin/routes/AdminRoutes";


export const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route path="/*" element={<ClientRoutes/>}/>
                <Route path="adminHome/*" element={
                    <PrivateRouteAdmin>
                        <AdminRoutes/>
                    </PrivateRouteAdmin>
                }/>
                <Route path="*" element={<Navigate to={"/"}/>}/>
            </Routes>

        </>
    )
}