import { createContext, useContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
    isLogged: boolean;
    signIn: (accessToken: string) => void;
    signOut: () => void;
    getUserSub: () => string | null | undefined;
    getAccessToken: () => string | null | undefined,
  }

const AuthContext = createContext<AuthContextType>({
    isLogged: false,
    signIn: (accessToken: string) => { console.log(accessToken) },
    signOut: () => {},
    getUserSub: () => {
        const cond = true;
        return cond ? "" : null
    },
    getAccessToken: () => {
        const cond = true;
        return cond ? "" : null
    },
});

interface AuthProviderProps{
    children: React.ReactNode,
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(["accessToken", "refreshToken"]);

    const handleVerifyCookie = () => {
        const accessTokenValue = cookies["accessToken"];
        
        if(accessTokenValue){
            return true;
        }else{
            return false;
        }
    }

    const [isLogged, setIsLogged] = useState(handleVerifyCookie());
    
    const getUserSub = () => {
        if(isLogged){
            try{
                const decoded = jwtDecode(cookies["accessToken"]);
                return decoded.sub;
            }catch(error){
                handleVerifyCookie();
            }
        }
        return null;
    }

    const getAccessToken = () => {
        if(isLogged){
            return cookies["accessToken"];
        }
        return null;
    }

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
        <AuthContext.Provider value={{isLogged, signIn, signOut, getUserSub, getAccessToken}}>
            { children }
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}
