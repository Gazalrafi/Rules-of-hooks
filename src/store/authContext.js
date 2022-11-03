import React,{useState} from 'react';

const AuthContext=React.createContext({
    isLoggedIn:false,
    onLogout:()=>{},
    onLogin:(email,password)=>{}
});
export const AuthContextProvider=(props)=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);

    const logoutHandler=()=>{
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
    };

    const logInHandler=()=>{
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(true);
    };
    return (
        <AuthContext.Provider
        value={{
            isLoggedIn:isLoggedIn,
            onLogout:logoutHandler,
            onLogin:logInHandler,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
};
export default AuthContext;