import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
    return (
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Register</h2>
                <RegisterForm />
                <div className="text-center mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default RegisterPage;
