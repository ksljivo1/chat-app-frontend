import React from "react";
import "./SignUpOption.css"
import logo from "./logo.svg";

export default function SignUpOption() {
    return (
        <div className="sign-up-option">
            <h1 style={{color: "white"}}>Welcome to ChatApp</h1>
            <img src={logo} className="App-logo" alt="logo"/>
            <p className="sign-up-option__title">Don't have an account?</p>
            <button className="sign-up-option__btn">Sign up</button>
        </div>
    );
}