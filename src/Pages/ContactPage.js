import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d60677.25420042982!2d74.18309629633181!3d18.102620323252477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x3bc3aad52a24b3c1%3A0x64d26fc3171d9d2c!2sJubilant%20Colony%2C%20Nira%2C%20Maharashtra%20412102%2C%20India!3m2!1d18.1025419!2d74.218116!4m0!5e0!3m2!1sen!2sin!4v1624015924718!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                <a href="tel:+918180099165">
                <ContactItem icon={phone} text1={'+91 8180099165'} text2={'+91 8180099165'} title={'Phone'}/>
                </a>
                <a href = "mailto:prakashraje020@gmail.com?subject = Feedback&body = Message">
                    <ContactItem icon={email} text1={'prakashraje020@hmail.com'} text2={'prakash.raje7@gmail.com'} title={'Email'}/>
                </a>
                    <ContactItem icon={location} text1={'JUBILLANT COLONY, AP. NIRA, TAL. PURANDAR MAHARASHTRA- 412102'} text2={'India'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
