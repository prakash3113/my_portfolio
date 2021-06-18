import React from 'react';
import {Link} from 'react-router-dom';
import about from '../img/about/abt.JPG';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span> Prakash Raje</span></h4>
                <p className="about-text">
                Result-driven, customer-focused, articulate and analytical software engineer who can think
                outside the box.
                Self-motivated and hardworking graduate seeking an opportunity to work in a challenging
                environment to prove my coding skills and utilize my knowledge of various databases for
                the growth of the organization.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Prakash Raje</p>
                        <p>: 23</p>
                        <p>: Indian</p>
                        <p>: Marathi, Hindi, English</p>
                        <p>: JUBILLANT COLONY, AP. NIRA, TAL. PURANDAR MAHARASHTRA- 412102</p>
                        <p><a href = "mailto:prakashraje020@gmail.com?subject = Feedback&body = Message">prakashraje020@gmail.com </a>|| <a href="tel:+918180099165">+918180099165 </a></p>
                    </div>
                </div>
                <Link to={{ pathname: "https://drive.google.com/file/d/1yoUBu7ZWjejmIrRuUa9Z3WZ7WCmHZqe1/view?usp=sharing" }} target="_blank">
                <button className="btn">Download Cv</button>
                </Link>
            </div>
        </div>
    )
}

export default ImageSection;
