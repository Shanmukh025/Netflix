import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    return (
    <>
    <div className='signup'>
    <div className='signuptext'>
        <div className='stheading'>
        Unlimited movies,
        </div>
        <div className='stheading'>
        TV shows and
        </div>
        <div className='stheading'>
        more...
        </div>
        <div className='stsubhead'>
        Starts at ₹149. Cancel anytime.<br/>
        </div>
        <div className='stsubhead'>
        Ready to watch?<br/>
        </div>
        <div className='stsubhead2'>
        Enter your email to create or restart your membership.
        </div>
        <div className='stsubheadi'>
        <input className="inputsp" name="text" type='email' placeholder="Email Address" required/>
        <button className='signupbtn' onClick={() => { navigate(`/profiles`)}} >Get Started</button>
        </div>
    </div>
    </div>
    </>
)
}

export default Signup