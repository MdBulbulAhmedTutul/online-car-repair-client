import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRouts = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation;
    // console.log(location.pathname)
    if (loading) {
        return <p className="text-center bg-orange-400 text-black py-4 text-3xl">Loading...</p>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRouts;