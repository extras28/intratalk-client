import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { cookieService } from "../utils/cookieService";
import { logout } from "../features/auth/authSlice";

export const useAuth = () => {
    const { isAuthenticated, user, loading } = useSelector((state) => state.auth);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // Check if token exists in cookie but state says not authenticated
        const token = cookieService.getToken();
        if (!token && isAuthenticated) {
            dispatch(logout());
        }

        if (!loading) {
            if (!isAuthenticated && location.pathname !== "/login" && location.pathname !== "/register") {
                navigate("/login", { state: { from: location } });
            } else if (isAuthenticated && (location.pathname === "/login" || location.pathname === "/register")) {
                navigate("/");
            }
        }
    }, [isAuthenticated, loading, location, navigate, dispatch]);

    return { isAuthenticated, user, loading };
};

export default useAuth;
