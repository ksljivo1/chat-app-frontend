import React from "react";
import "./SignInOption.css";
import "./AnimationRight.css"

export default function SignInOption() {
    return (
        <div className="sign-in-option">
            <h1 style={{color: "white"}}>Welcome to ChatApp!</h1>
            <img src="/logo.png" width={100} height={100} alt="logo" className="logo" />
            <div className="option_container">
                <div className="sign_in_option_container">
                    <p className="sign-in-option__title">Already have an account?</p>
                    <button className="sign-in-option__btn" onClick={toggle1}>Sign in</button>
                </div>
                <div className="sign_up_option_container">
                    <p className="sign-up-option__title">Don't have an account?</p>
                    <button className="sign-up-option__btn" onClick={toggle2}>Sign up</button>
                </div>
            </div>
        </div>
    );
}

function toggle1() {
    document.querySelector('.sign-in-option').classList.remove('moveSignInLeftwards');
    document.querySelector('.sign_in_option_container').classList.remove('signInAppears');
    document.querySelector('.sign_up_option_container').classList.remove('signUpDisappears');
    document.querySelector('.logo').classList.remove('logoRollsLeftwards');

    document.querySelector('.sign-in-option').classList.add('moveSignInRightwards');
    document.querySelector('.sign_in_option_container').classList.add('signInDisappears');
    document.querySelector('.sign_up_option_container').classList.add('signUpAppears');
    document.querySelector('.logo').classList.add('logoRollsRightwards');
}

function toggle2() {
    document.querySelector('.sign-in-option').classList.remove('moveSignInRightwards');
    document.querySelector('.sign_in_option_container').classList.remove('signInDisappears');
    document.querySelector('.sign_up_option_container').classList.remove('signUpAppears');
    document.querySelector('.logo').classList.remove('logoRollsRightwards');

    document.querySelector('.sign-in-option').classList.add('moveSignInLeftwards');
    document.querySelector('.sign_in_option_container').classList.add('signInAppears');
    document.querySelector('.sign_up_option_container').classList.add('signUpDisappears');
    document.querySelector('.logo').classList.add('logoRollsLeftwards');
}
