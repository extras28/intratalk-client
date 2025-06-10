import { Formik, Form } from "formik";
import { Button, Form as BootstrapForm, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../../forms/loginSchema";
import { authApi } from "../../../api";
import { loginStart, loginSuccess, loginFailure } from "../authSlice";

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            dispatch(loginStart());
            const data = await authApi.login(values);
            dispatch(loginSuccess(data));
            navigate("/");
        } catch (err) {
            dispatch(loginFailure(err.response?.data?.message || "Login failed"));
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik initialValues={{ email: "", password: "" }} valid ationSchema={loginSchema} onSubmit={handleSubmit}>
            {({ errors, touched, getFieldProps, isSubmitting }) => (
                <Form>
                    {error && <Alert variant="danger">{error}</Alert>}

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

                    <Button type="submit" variant="primary" className="w-100" disabled={loading || isSubmitting}>
                        {loading ? "Logging in..." : "Login"}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
