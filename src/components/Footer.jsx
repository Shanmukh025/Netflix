import React from 'react'

const Footer = () => {
    return (
    <footer>
        <div className='footercont'>
        <div className='infoboxesf'>
            <div className='boxf'>
                Connect with me:<br/>
                <h2><a href='https://www.linkedin.com/in/shanmukh-anaparthi/' target='_blank'>LinkedIn</a></h2><br/>
                <h2><a href='mailto:shanmukh2564@gmail.com' target='_blank'>Email</a></h2><br/>
                <h2><a href='https://github.com/Shanmukh025' target='_blank'>Github</a></h2><br/>
                </div>
        </div>
        </div>
        <a href='https://shanmukhanaparthi.pythonanywhere.com/' target='_blank'>
        Made with <img src='https://emojigraph.org/media/apple/red-heart_2764-fe0f.png' style={{height: '20px', width: '20px'}}/> by Shanmukh.
        </a>
    </footer>
)
}

export default Footer