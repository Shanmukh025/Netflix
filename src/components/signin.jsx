import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.jsx';

const Signin = () => {
    const navigate = useNavigate();
    window.onload = function() {
        var checkbox = document.getElementById('remember-me');
        checkbox.checked = true;
    };
return (
    <>
    <nav>
    <div className="logo-container" style={{color:'white'}}>
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix" onClick={() => { navigate(`/`)}}
        />
    </div>
    <div className="buttons-container">
    <button className="sign-in" onClick={() => { navigate(`/`)}}>Sign Up</button>
    </div>
    </nav>
    <div className='signin'>
    <div className="form-wrapper">
        <h2>Sign In</h2>
        <form>
            <div className="form-control">
                <input type="text"/>
                <label>Email or phone number</label>
            </div>
            <div className="form-control">
                <input type="password"/>
                <label>Password</label>
            </div>
            <button onClick={() => { navigate(`/profiles`)}}>Sign In</button>
            <div className="form-help">
                <div className="remember-me">
                    <input type="checkbox" id="remember-me"/>
                    <label for="remember-me">Remember me</label>
                </div>
                <a>Need help?</a>
            </div>
        </form>
        <p>New to Netflix? <a onClick={() => { navigate(`/`)}}>Sign up now</a></p>
        <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <a> Learn more.</a>
        </small>
    </div>
    </div>
    <Footer/>
    </>
)
}

export default Signin