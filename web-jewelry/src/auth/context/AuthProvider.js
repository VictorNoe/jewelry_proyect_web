import {AuthContext} from "./AuthContext";
import {useReducer} from "react";
import {AuthReducer} from "./AuthReducer";
import {types} from "../types/types";

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({children}) => {

    const [ authState, dispatch ] = useReducer( AuthReducer, {}, init );

    const login = ( email = '' ) => {

        const user = { email, status: true , role: 1, token: '' }

        const action = {
            type: types.login,
            payload: user
        }

            localStorage.setItem('user', JSON.stringify( user ));
            dispatch( action );
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout
        };
        dispatch( action );
    }

   return (
       <AuthContext.Provider value={{
           ...authState,
           login,
           logout,
       }}>
           {children}
       </AuthContext.Provider>
   )
}