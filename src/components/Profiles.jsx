import React from 'react';
import { useNavigate } from 'react-router-dom';
import blue from '../assets/blue.jpg';
import green from '../assets/green.jpg';
import red from '../assets/red.jpg';
import yellow from '../assets/yellow.jpg';


const Profiles = () => {
    const navigate = useNavigate();
    const profileData = [
        {  imageSrc: red, height: '100%', width: '80%',  },
        {  imageSrc: blue, height: '100%', width: '80%',},
        {  imageSrc: yellow, height: '100%', width: '80%',},
        {  imageSrc: green, height: '100%', width: '80%', },
    ];
    return (
    <>
    <div className='profilebox'>
    <div className='profileheading'>
        Who's Watching?
    </div>
    <div className='profilelist'>
        <div className='profiles'>
            <img src={red} alt="red" onClick={() => { navigate(`/profile1`)}}/>
        </div>
        <div className='profiles'>
        <img src={blue} alt="blue" onClick={() => { navigate(`/profile2`)}}/>
        </div>
        <div className='profiles'>
        <img src={yellow} alt="yellow" onClick={() => { navigate(`/profile3`)}} />
        </div>
        <div className='profiles'>
        <img src={green} alt="green" onClick={() => { navigate(`/profile4`)}}/>
        </div>
    </div>
    <div className='profilenames'>
        <div className='profilesn'>
            Profile 1
        </div>
        <div className='profilesn'>
            Profile 2
        </div>
        <div className='profilesn'>
            Profile 3
        </div>
        <div className='profilesn'>
            Profile 4
        </div>
    </div>
    <div className='profileheading'>
        <button className='profilebutton'>Manage Profiles</button>
    </div>
    </div>
    </>
)
}

export default Profiles