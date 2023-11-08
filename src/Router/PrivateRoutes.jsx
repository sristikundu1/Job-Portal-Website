import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const{user,loading} = useContext(AuthContext);

    const location = useLocation();

    if(loading){
        return <span className="loading loading-infinity loading-lg flex justify-center items-center"></span>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;