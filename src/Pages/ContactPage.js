import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Components/Titles';
/**
* @author
* @function ContactPage
**/

const ContactPage = (props) => {
    return (
        <>
            <div className="title">
                <Title title={'Contact Me'} span={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.335179594463!2d75.8915092997999!3d22.752939135017073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302af403406fb%3A0x5b50834b117f8bab!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1616765079933!5m2!1sen!2sin"
                        title="My Address" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 8517959992'} text2={'+91 6265576366'} title={'Phone'} />
                    <ContactItem icon={email} text1={'satendrasahu82@gmail.com'} text2={''} title={'Email'} />
                    <ContactItem icon={location} text1={'GrantTruck Road, Vijay Nagar Indore(MP) 452010'} text2={'India'} title={'Address'} />


                </div>

            </div>
        </>
    )

}

export default ContactPage