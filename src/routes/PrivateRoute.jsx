import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);
    const location = useLocation();

    if (loading) {
        // You can add a loading spinner here
        return <div>Loading...</div>;
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
