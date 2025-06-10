import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                <LoginForm />
                <div className="text-center mt-3">
                    Don't have an account? <Link to="/register">Register</Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default LoginPage;
