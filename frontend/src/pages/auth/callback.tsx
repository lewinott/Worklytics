// Libs
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

// Components
import { loginRequest } from "../../api/authRequests";

// Context
import { useAuth } from "../../contexts/authContext";

const Callback = () => {
    const location = useLocation();
    const { isLogged, signIn } = useAuth();

    useEffect(() => {        
        const handleRequestToken = async () => {
            const urlParams = new URLSearchParams(location.search);
            const code = urlParams.get("code");

            if (code) {
                try{
                    const { data }: any = await loginRequest(code);
                    signIn(data.access_token);
                }catch(error){
                    console.error("Erro ao trocar o código:", error)
                }    
            }
        }
        
        handleRequestToken();
    }, [location]);
  
    if (!isLogged) {
      return <div>Autenticando...</div>;
    }

    return <Navigate to="/" />;
}

export default Callback;