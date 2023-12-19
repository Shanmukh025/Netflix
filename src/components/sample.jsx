import React from 'react'

const sample = () => {
  return (
    <>
        <div className='info'>
            <div className="box-1">
        <div className='infoheading'>
            A Plan To Suit Your Needs
        </div>
        <div className='infoboxes'>
            <div className='box'>
            <img src={smartphone} alt="Phone"  style={{width:'45px', height:'45px'}}/>
            <br/>
                <h2>Mobile</h2><br/>
                <p>A travel-friendly option for your mobile and tablet devices.</p><br/>
                <h3>₹149/month</h3>
            </div>
            <div className='box'>
            <img src={dim} alt="Phone"  style={{width:'45px', height:'45px'}}/>
            <br/>
            <h2>Basic</h2><br/>
                <p>A great way to enjoy your favourite shows & movies on a budget.</p><br/>
                <h3>₹199/month</h3>
            </div>
            <div className='box'>
            <img src={doc} alt="Phone"  style={{width:'45px', height:'45px'}}/>
            <br/>
            <h2>Standard</h2><br/>
                <p>All the entertainment you love, in Full HD video quality.</p><br/>
                <h3>₹499/month</h3>
            </div>
            <div className='box'>
            <img src={tv} alt="Phone"  style={{width:'45px', height:'45px'}}/>
            <br/>
            <h2>Premium</h2><br/>
                <p>A cinematic experience with the best picture and audio quality.</p><br/>
                <h3>₹649/month</h3>
            </div>
        </div>
            </div>

            <PlayCard />

    <div className='infoheading'>
        More Reasons to Join
    </div>
        
        <div className='infoboxesx'>
        <div className='boxx'>
            <h2>Enjoy on device of your choice</h2>
            <br/><p>
            Watch on Smart TVs, PlayStation, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className='boxx'>
            <h2>Download shows & watch offline</h2><br/>
            <p>Save your favourites easily and download to always have something to watch.</p>
            </div>
            <div className='boxx'>
            <h2>Watch anywhere & everywhere</h2><br/>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
            </div>
            <div className='boxx'>
            <h2>Create profiles for kids</h2><br/>
            <p>Send kids to space for adventures made for them — free with your membership.</p>
        </div>
        </div>

        <div className='infoheading'>
            Frequently Asked Questions
        </div>
        
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
                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>}
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

    </div>
    </>
  )
}

export default sample