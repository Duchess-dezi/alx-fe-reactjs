import { useState } from "react";
import React from 'react'


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const validateForm = () => {
        let newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        }
        if (!formData.password.trim) {
            newErrors.password = "Password is required"
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        if (validateForm()) {
            alert('Form Submitted successfully!');
        };
    };
    
    return (
       
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange} required />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            <br />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange} required />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            <br />

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;