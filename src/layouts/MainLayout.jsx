import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { authApi } from "../api";

const MainLayout = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleLogout = async () => {
        try {
            await authApi.logout();
            dispatch(logout());
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="min-vh-100 d-flex flex-column">
            <Navbar bg="light" expand="lg" className="mb-3">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        IntraTalk
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            {user ? (
                                <>
                                    <Nav.Link as={Link} to="/profile">
                                        Profile
                                    </Nav.Link>
                                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/register">
                                        Register
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="flex-grow-1">
                <Outlet />
            </Container>
        </div>
    );
};

export default MainLayout;
