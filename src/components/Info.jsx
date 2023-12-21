import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import dim from '../assets/3d.png'
import doc from '../assets/documentary.png'
import smartphone from '../assets/smartphone.png'
import tv from '../assets/tv.png'

const Info = () => {

    const navigate = useNavigate();

    const CollapsibleSection = ({ title, content }) => {
        const [isOpen, setIsOpen] = useState(false);
        const handleToggle = () => {
        setIsOpen(!isOpen);
        };
    return(
        <div className="collapsible-section">
            <div className="collapsible-header" onClick={handleToggle}>
            <h3>{title}</h3>
            <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="collapsible-content">{content}</div>}
        </div>
    );

    const items =[
        {
            "title":'Mobile',
            'text':'A travel-friendly option for your mobile and tablet devices.',
            'cost':'₹149/month'
        },
    ]
};
    return (
    <>
        <div className="info-container">
            
            <section className="info-box-1">
                <h3 className="heading"> A Plan To Suit Your Needs</h3>
                <article className="textbox">
                    <div className='box' id='box1'>
                        <img src={smartphone} alt="Phone"  style={{width:'45px', height:'45px'}}/>
                        <br/>
                        <h2>Mobile</h2><br/>
                        <p>A travel-friendly option for your mobile and tablet devices.</p><br/>
                        <h3>₹149/month</h3>
                    </div>
                    <div className='box' id='box2'>
                        <img src={dim} alt="Phone"  style={{width:'45px', height:'45px'}}/>
                        <br/>
                        <h2>Basic</h2><br/>
                        <p>A great way to enjoy your favourite shows & movies on a budget.</p><br/>
                        <h3>₹199/month</h3>
                    </div>
                    <div className='box' id='box3'>
                        <img src={doc} alt="Phone"  style={{width:'45px', height:'45px'}}/>
                        <br/>
                        <h2>Standard</h2><br/>
                        <p>All the entertainment you love, in Full HD video quality.</p><br/>
                        <h3>₹499/month</h3>
                    </div>
                    <div className='box' id='box4'>
                        <img src={tv} alt="Phone"  style={{width:'45px', height:'45px'}}/>
                        <br/>
                        <h2>Premium</h2><br/>
                        <p>A cinematic experience with the best picture and audio quality.</p><br/>
                        <h3>₹649/month</h3>
                    </div>
                </article>
            </section>
            <section className="info-box-2">
                <h3 className="heading">Play Mobile Games</h3>
                <div className="playcard">
                    <section className="image-container">
                        <img src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/12/Netflix-games.png?fit=1200%2C675&ssl=1" alt="" className="playcard-img" />
                    </section>
                    <section className="text-container">
                        <h2>Mobile games now included in every plan</h2>
                        <br/>
                        <p>
                            <ul>
                                <li>Unlimited access to more than 50+ exclusive mobile games.</li>
                                <li>Download on Android phones, tablets, iPhone, iPads and Laptops.</li>
                            </ul>
                        </p>
                    </section>
                </div>
            </section>
            <section className="info-box-3">
                <h3 className="heading"> More Reasons to Join</h3>
                <article className="textbox">
                    <div className='box join-box' id='box1'>
                    <h2>Enjoy on device of your choice</h2>
                        <br/><p>
                        Watch on Smart TVs, PlayStation, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className='box join-box' id='box2'>
                    <h2>Download shows & watch offline</h2><br/>
                        <p>Save your favourites easily and download to always have something to watch.</p>
                    </div>
                    <div className='box join-box' id='box3'>
                    <h2>Watch anywhere & everywhere</h2><br/>
                        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
                    </div>
                    <div className='box join-box' id='box4'>
                        <h2>Create profiles for kids</h2><br/>
                        <p>Send kids to space for adventures made for them — free with your membership.</p>
                    </div>
                </article>
            </section>
            <section className="info-box-4">
            <h3 className="heading">Frequently Asked Questions</h3>
            <div className='collapsible'>
        <CollapsibleSection
            title="What is Netflix?"
            content={<p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/>
                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                </p>}
        />
        <CollapsibleSection
            title="Where can I watch?"
            content={<p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/>
            </p>}
        />
        <CollapsibleSection
            title="What can I watch on Netflix?"
            content={<p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>}
        />
        <CollapsibleSection
            title="How do I cancel Netflix?"
            content={<p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>}
        />
        <CollapsibleSection
            title="Is Netflix safe for Kids?"
            content={<p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br/>
                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>}
        />
        </div>
            </section>
            <section className="info-box-4">
            <h3 className="heading">Ready to watch? Start your membership.</h3>
            <article className="input">
                <input className="inputsp" name="text" type='email' placeholder="Email Address" required/>
                <button className='signupbtn' onClick={() => { navigate(`/signin`)}} >Get Started</button>
            </article>
            </section>
        </div>
    </>
)
}

export default Info