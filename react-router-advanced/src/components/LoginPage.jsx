import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (values, { resetForm }) => {
        console.log("Formik form data:", values);
        login();
        navigate("/profile");
        resetForm();
    };

    return (
        <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <Field type="text" id="username" name="username" />
                    <ErrorMessage name="username" component="div" style={{ color: "red" }} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component="div" style={{ color: "red" }} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="div" style={{ color: "red" }} />
                </div>
                <button type="submit">Login</button>
            </Form>
        </Formik>
    );
}

export default LoginPage;
