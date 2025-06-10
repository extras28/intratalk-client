import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const AuthLayout = ({ toggleTheme, theme }) => {
    return (
        <Container className="d-flex align-items-center justify-content-center min-vh-100 position-relative">
            <button
                onClick={toggleTheme}
                className="btn btn-link position-absolute top-0 end-0 m-3 fs-4"
                aria-label="Toggle theme"
                style={{ zIndex: 9999 }}
            >
                <i className={theme === "light" ? "fa-regular fa-moon" : "fa-regular fa-sun text-warning"}></i>
            </button>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Outlet />
            </div>
        </Container>
    );
};

export default AuthLayout;
