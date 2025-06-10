import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authApi } from "./api";
import { loginSuccess, logout } from "./features/auth/authSlice";
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/fontawesomes/version_6_pro/css/all.min.css";

function App() {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.body.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
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

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <>
            <button
                onClick={toggleTheme}
                className="btn btn-link position-fixed top-0 end-0 m-3 fs-4"
                aria-label="Toggle theme"
                style={{ zIndex: 9999 }}
            >
                <i className={theme === "light" ? "fa-regular fa-moon" : "fa-regular fa-sun"}></i>
            </button>
            <div className="bg-body text-body min-vh-100">
                <RouterProvider router={router} />
            </div>
        </>
    );
}

export default App;
