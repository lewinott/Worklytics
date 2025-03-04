import { createContext, useContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext({
    isLogged: false,
    signIn: (accessToken: string) => {},
    signOut: () => {},
});

interface AuthProviderProps{
    children: React.ReactNode,
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

    const handleVerifyCookie = () => {
        const accessTokenValue = cookies["accessToken"];
        
        if(accessTokenValue){
            return true;
        }else{
            return false;
        }
    }

    const [isLogged, setIsLogged] = useState(handleVerifyCookie());
    
    const signIn = (accessToken: string) => {
        setCookie("accessToken", accessToken);
    };

    const signOut = () => {
        removeCookie("accessToken");
    };
    
    useEffect(() => {
        setIsLogged(handleVerifyCookie());
    }, [cookies]);

    return (
        <AuthContext.Provider value={{isLogged, signIn, signOut}}>
            {   
                children
            }
        </AuthContext.Provider>
    );
    
}

export const useAuth = () => {
    return useContext(AuthContext);
}
