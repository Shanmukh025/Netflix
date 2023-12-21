import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    return (
    <>
    <div className='signup'>
        {/* <div className='signuptext'>
            
            <div className='stheading'>
                Unlimited movies, TV Shows and more...
            </div>
            <div className='stsubhead'>
                Starts at ₹149. Cancel anytime. Ready to watch?<br/>
            </div>
            <div className='stsubhead2'>
                Enter your email to create or restart your membership.
            </div>

            <div className='stsubheadi'>
                <input className="inputsp" name="text" type='email' placeholder="Email Address" required/>
                <button className='signupbtn' onClick={() => { navigate(`/profiles`)}} >Get Started</button>
            </div>

            
        </div> */}

        <section className="signup-text">
            <article className="text">
                <h3 className="heading"> Unlimited movies, <br /> TV Shows and <br /> more...</h3>
                <p className="caption">Starts at ₹149. Cancel anytime. <br /><p>Ready to watch?</p></p>
                <span className="tag-line">Enter your email to create or restart your membership.</span>
            </article>
            <article className="input">
                <input className="inputsp" name="text" type='email' placeholder="Email Address" required/>
                <button className='signupbtn' onClick={() => { navigate(`/signin`)}} >Get Started</button>
            </article>
        </section>
    </div>
    <hr className='redline'/>
    </>
)
}

export default Signup