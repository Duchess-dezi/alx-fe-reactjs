import { useState } from "react";
import React from 'react'


const RegistrationForm = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const {
            name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const validateForm = () => {
        let newErrors = {};
        if (!formData.username.trim()) {
            newErrors.username = "Username is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }
        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 7) {
            newErrors.password = "Password must be at least 7 characters";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Controlled form data:", formData);
            alert("Form submitted successfully!");
            setFormData({ username: "", email: "", password: "" }); // Reset form
            setErrors({});
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={"username"}
                    onChange={handleChange}
                />
                {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={"email"}
                    onChange={handleChange}
                />
                {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={"password"}
                    onChange={handleChange}
                />
                {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
            </div>

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;