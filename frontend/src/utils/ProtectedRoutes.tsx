import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const ProtectedRoutes = () => {
    const { isLogged } = useAuth();
    console.log(isLogged);
    return isLogged ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoutes;