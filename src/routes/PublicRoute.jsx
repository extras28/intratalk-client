import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);

    if (loading) {
        // You can add a loading spinner here
        return <div>Loading...</div>;
    }

    return !isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PublicRoute;
