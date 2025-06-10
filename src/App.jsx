import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { authApi } from "./api";
import "./App.css";
import "./assets/fontawesomes/version_6_pro/css/all.min.css";
import { loginSuccess, logout } from "./features/auth/authSlice";
import { setTheme } from "./features/app/appSlice";
import createAppRouter from "./routes/AppRouter";

function App() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.app.theme);

    useEffect(() => {
        document.body.setAttribute("data-bs-theme", theme);
    }, [theme]);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const user = await authApi.getProfile();
                dispatch(loginSuccess(user));
            } catch (error) {
                dispatch(logout());
            }
        };
        checkAuth();
    }, [dispatch]);

    const toggleTheme = () => dispatch(setTheme(theme === "light" ? "dark" : "light"));
    const router = createAppRouter(toggleTheme, theme);

    return (
        <div className="bg-body text-body min-vh-100">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
