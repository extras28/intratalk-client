import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="text-center">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <Button as={Link} to="/" variant="primary">
                Go Home
            </Button>
        </div>
    );
};

export default NotFoundPage;
