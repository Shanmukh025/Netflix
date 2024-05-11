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
    <div className='profilelist'>
        <div className='profileheading'>
            Who's Watching?
        </div>
        <div className="profile-boxes">
        <div className='profiles' onClick={() => { navigate(`/profile1`)}}>
            <img src={red} alt="red"/>
            <div className='profilesn'>
                Profile 1
            </div>
        </div>
        <div className='profiles' onClick={() => { navigate(`/profile2`)}}>
            <img src={blue} alt="blue"/>
            <div className='profilesn'>
                Profile 2
            </div>
        </div>
        <div className='profiles' onClick={() => { navigate(`/profile3`)}} >
            <img src={yellow} alt="yellow"/>
            <div className='profilesn'>
                Profile 3
            </div>
        </div>
        <div className='profiles' onClick={() => { navigate(`/profile4`)}}>
            <img src={green} alt="green"/>
            <div className='profilesn'>
                Profile 4
            </div>
        </div>
        </div>
            <button className='profilebutton'>Manage Profiles</button>
    </div>
    
    
    </div>
    </>
)
}

export default Profiles