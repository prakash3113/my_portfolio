import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Prakash Raje.</span>
                </h1>
                <p className="h-sub-text">
                I enjoy being challenged and engaging with projects that require me to work 
                outside my comfort and knowledge set, as continuing to learn new languages 
                and development techniques are important to me.
                <p className="h-sub-text">
                •	Highly skilled in designing, testing, and developing software
                •	Thorough understanding of data structures and algorithms
                •	Knowledgeable of back-end development best practices
                •	Hands-on software troubleshooting experience
                </p>

                </p>
                <div className="icons">
               
                    <Link to={{ pathname: "https://www.facebook.com/prakash.raje.7121/" }} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    
                    <Link to={{ pathname: "https://github.com/prakash3113?tab=repositories" }} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to={{ pathname: "https://www.youtube.com/channel/UCNM3588fwcEY6YNLDu9E1mA" }} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                    <Link to={{ pathname: "https://www.instagram.com/prakash_3113/" }} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon insta"/>
                    </Link>
                    <Link to={{ pathname: "https://www.linkedin.com/in/prakash-raje-71b080162/" }} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon lin"/>
                    </Link>
                   
                </div>
            </header>
        </div>
    )
}

export default HomePage;
