import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
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
    <select name="language" id="language" className='language'>
    <option value="english">Æ English</option>
    <option value="french">ꞙ French</option>
    <option value="italian">ĩ Italian</option>
    <option value="spanish">ś Spanish</option>
    </select>
    <button className="sign-in" onClick={() => { navigate(`/profiles`)}}>Sign In</button>
    </div>
    </nav>
    </>
);
};

export default Navbar;
