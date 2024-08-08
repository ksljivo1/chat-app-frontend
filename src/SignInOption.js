import React from "react";
import "./SignInOption.css";
import logo from "./logo.svg";

export default function SignInOption() {
    return (
        <div className="sign-in-option">
            <h1 style={{color: "white"}}>Welcome to ChatApp</h1>
            <img src={logo} className="App-logo" alt="logo"/>
            <p className="sign-in-option__title">Already have an account?</p>
            <button className="sign-in-option__btn">Sign in</button>
        </div>
    );
}