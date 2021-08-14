import React from 'react'
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
    return (
        <>
            <div className="HomePage">
                <header className="hero">
                    <h1 className="hero-text">
                        I am
                    <span> satendra sahu</span>
                    </h1>
                    <p className="h-sub-text">
                        I am a Full Stack Developer. Now  i am working as a Senior Software Developer at "Carepact Infotech Pvt Ltd". 
                        I have qualified MCA(Master Of Computer Application(2018-2021)),
                        i have experience of Java Full Stack Development, Mern Stack Development,
                        Mean Stack Development, React-Native App Development, Flutter & Android App Development.
                </p>

                    <div className="icons">
                        <a className="icon-holder" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/satendra-sahu-701b321a9/">
                            <FontAwesomeIcon className="icon li" icon={faLinkedin} />
                        </a>
                        <a className="icon-holder" target="_blank" rel="noreferrer" href="https://github.com/satendrasahu">
                            <FontAwesomeIcon className="icon gh" icon={faGithub} />
                        </a>

                        <a target="_blank" rel="noreferrer" className="icon-holder" href="https://bit.ly/386LKzS">
                            <FontAwesomeIcon className="icon wa" icon={faWhatsapp} />
                        </a>
                        <a className="icon-holder" target="_blank" rel="noreferrer" href="https://t.me/Sahus_the_classic">
                            <FontAwesomeIcon className="icon te" icon={faTelegram} />
                        </a>

                        <a className="icon-holder" target="_blank" rel="noreferrer" href="https://www.instagram.com/sahustheclassic/">
                            <FontAwesomeIcon className="icon in" icon={faInstagram} />
                        </a>
                        <a href="https://www.youtube.com/channel/UClMdzH5HACUAKEl65CqK0Fw" target="_blank" rel="noreferrer" className=" icon-holder">
                            <FontAwesomeIcon className="icon yt" icon={faYoutube} />
                        </a>
                    </div>
                </header>
            </div >

        </>)

}

export default HomePage