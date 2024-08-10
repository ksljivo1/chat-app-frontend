import React from "react";
import "./LoginForm.css"

export default function LoginForm() {
    return (
        <div className="LoginForm">
            <h2 style={{color: "black"}}>Log into Your Account</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter Email"/>
                <input type="password" name="password" placeholder="Enter Password"/>
                <button type="submit">Log in</button>
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
    data["username"] = "ignored";

    try {
        const response = await fetch('http://localhost:8080/api/v1/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('Login successful');
        } else {
            alert('Login failed');
        }
    }
    catch (error) {
        console.error('Error during fetch:', error);
        console.log(JSON.stringify(data));
        alert('Failed to fetch');
    }
}