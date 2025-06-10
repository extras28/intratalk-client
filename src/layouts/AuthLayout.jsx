import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <Container className="d-flex align-items-center justify-content-center min-vh-100">
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Outlet />
            </div>
        </Container>
    );
};

export default AuthLayout;
