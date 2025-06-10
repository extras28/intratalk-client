import { Form, Formik } from "formik";
import { Alert, Form as BootstrapForm, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../../forms/loginSchema";
import { loginFailure, loginStart, loginSuccess } from "../authSlice";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            dispatch(loginStart());
            const data = await authApi.register(values);
            dispatch(loginSuccess(data));
            navigate("/");
        } catch (err) {
            dispatch(loginFailure(err.response?.data?.message || "Registration failed"));
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
            validationSchema={registerSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, getFieldProps, isSubmitting }) => (
                <Form>
                    {error && <Alert variant="danger">{error}</Alert>}

                    <BootstrapForm.Group className="mb-3">
                        <BootstrapForm.Label>Name</BootstrapForm.Label>
                        <BootstrapForm.Control
                            type="text"
                            {...getFieldProps("name")}
                            isInvalid={touched.name && errors.name}
                        />
                        <BootstrapForm.Control.Feedback type="invalid">{errors.name}</BootstrapForm.Control.Feedback>
                    </BootstrapForm.Group>

                    <BootstrapForm.Group className="mb-3">
                        <BootstrapForm.Label>Email</BootstrapForm.Label>
                        <BootstrapForm.Control
                            type="email"
                            {...getFieldProps("email")}
                            isInvalid={touched.email && errors.email}
                        />
                        <BootstrapForm.Control.Feedback type="invalid">{errors.email}</BootstrapForm.Control.Feedback>
                    </BootstrapForm.Group>

                    <BootstrapForm.Group className="mb-3">
                        <BootstrapForm.Label>Password</BootstrapForm.Label>
                        <BootstrapForm.Control
                            type="password"
                            {...getFieldProps("password")}
                            isInvalid={touched.password && errors.password}
                        />
                        <BootstrapForm.Control.Feedback type="invalid">
                            {errors.password}
                        </BootstrapForm.Control.Feedback>
                    </BootstrapForm.Group>

                    <BootstrapForm.Group className="mb-3">
                        <BootstrapForm.Label>Confirm Password</BootstrapForm.Label>
                        <BootstrapForm.Control
                            type="password"
                            {...getFieldProps("confirmPassword")}
                            isInvalid={touched.confirmPassword && errors.confirmPassword}
                        />
                        <BootstrapForm.Control.Feedback type="invalid">
                            {errors.confirmPassword}
                        </BootstrapForm.Control.Feedback>
                    </BootstrapForm.Group>

                    <Button type="submit" variant="primary" className="w-100" disabled={loading || isSubmitting}>
                        {loading ? "Registering..." : "Register"}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;
