import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

const Signin = () => {
    const navigate = useNavigate();
return (
    <>
    <nav>
    <div className="logo-container" style={{color:'white'}}>
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix"
        />
    </div>
    <div className="buttons-container">
    <button className="sign-in" onClick={() => { navigate(`/`)}}>Sign Up</button>
    </div>
    </nav>
    <div className='signin'>
        <div className='signin-container'>
            </div>
        <h1>Sign In</h1>
    </div>
    <Footer/>
    </>
)
}

export default Signin