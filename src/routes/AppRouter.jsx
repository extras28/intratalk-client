import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ChatLayout from "../features/chat/pages/ChatLayout";

const createAppRouter = (toggleTheme, theme) =>
    createBrowserRouter([
        {
            element: <PrivateRoute />,
            children: [
                {
                    path: "/",
                    element: <MainLayout toggleTheme={toggleTheme} theme={theme} />,
                    children: [
                        {
                            index: true,
                            element: <HomePage />,
                        },
                        {
                            path: "chat",
                            element: <ChatLayout />,
                        },
                    ],
                },
            ],
        },
        {
            element: <PublicRoute />,
            children: [
                {
                    element: <AuthLayout toggleTheme={toggleTheme} theme={theme} />,
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

export default createAppRouter;
