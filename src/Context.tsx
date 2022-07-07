import React, { createContext, useContext, useState } from "react";




type globalContext = {
    isAuth: boolean;
    activateAuth: (token: string) => void;
    removeAuth: () => void;
}

const initiaState = {
    isAuth: false,
    activateAuth: () => {},
    removeAuth: () => {},
}

export const AuthContext = createContext<globalContext>(initiaState);


export const AuthProvider = ({children}:PropsChildren) => {
    const [ isAuth, setIsAuth ] = useState<boolean>( () => {
        return window.sessionStorage.getItem('token') !== null;
    });
    const activateAuth = (token: string) => {
        setIsAuth(true);
        window.sessionStorage.setItem('token', token);
    };

    const removeAuth = () =>{
        setIsAuth(false);
        window.sessionStorage.removeItem('token');
    }

    return (
    <AuthContext.Provider value={{isAuth, activateAuth, removeAuth}}>
        {children}
    </AuthContext.Provider>)
}

/* 


const GlobalContext = () =>{
    const [ isAuth, setIsAuth ] = useState(initiaState.isAuth);
    const activateAuth = () => setIsAuth(true);

    return {isAuth, activateAuth};
}

export const useGlobalContext = () => useContext(GlobalContext)
 */