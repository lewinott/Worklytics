import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

const ProtectedRoutes = () => {
    const { isLogged } = useAuth();
    return isLogged ? <Outlet/> : <Navigate to="/login"/>
}

export default ProtectedRoutes;