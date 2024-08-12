import React from "react";
import "./RegistrationForm.css";

export default function RegistrationForm() {
    return (
        <div className="RegistrationForm">
            <h2 style={{color: "black"}}>Create account</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Enter Name"/>
                <input type="email" name="email" placeholder="Enter Email"/>
                <input type="password" name="password" placeholder="Enter Password"/>
                <button type="submit" className="button">Register</button>
            </form>
        </div>
    );
}

async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch('http://localhost:8080/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Registration successful');
        } else {
            alert('Registration failed');
        }
    }
    catch (error) {
        console.error('Error during fetch:', error);
        console.log(JSON.stringify(data));
        alert('Failed to fetch');
    }
}