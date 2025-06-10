import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const router = createBrowserRouter([
    {
        element: <PrivateRoute />,
        children: [
            {
                path: "/",
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                ],
            },
        ],
    },
    {
        element: <PublicRoute />,
        children: [
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <LoginPage />,
                    },
                    {
                        path: "register",
                        element: <RegisterPage />,
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

export default router;
