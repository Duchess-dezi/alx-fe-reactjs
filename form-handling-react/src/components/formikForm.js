import { Formik, Form, Field, ErrorMessage } from 'Formik'
import * as Yup from 'yup';
import React from 'react'

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup.string()
        .min(7, "Password must be at least 6 characters")
        .required("Password is required")
});

const FormikForm = () => {
    return (
        <Formik
            initialValue={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                alert("Form submitted successfully!");
                console.log("Form Data:", values);
                setSubmitting(false);
                resetForm();
            }}
        >

            {
                () => (

                    <Form>
                        <label htmlFor='email'>Email: </label>
                        <Field type="email" name="email" />
                        <ErrorMessage name='email' component="p" style={{ color: "red" }} />

                        <label htmlFor='password'>Password: </label>
                        <Field type="password" name="password" />
                        <ErrorMessage name='password' component="p" style={{ color: "red" }} />

                        <button type='submit' disabled = {isSubmitting} > Register </button>

                    </Form>
                )
            }
        </Formik>
    );
};

export default FormikForm;
