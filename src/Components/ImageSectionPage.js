import React from 'react';
import about from '../img/satendra.jpg';

/**
* @author
* @function ImageSection
**/

const ImageSection = (props) => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am <span>Satendra Sahu</span></h4>
                <p className="about-text">
                    I am a full stack developer. Now i am working as a Senior Software Developer in carepact infotech pvt Ltd.
                    I have qualified MCA(Master Of Computer Application (2018-2021)),
                    i have experience of Java Full Stack Development, Mern Stack Development,
                    Mean Stack Development, React-Native App Development, Flutter & Android App Development.
                  </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>DOB</p>
                        <p>Nationality</p>
                        <p>Religion</p>
                        <p>Languages</p>
                        <p>Country</p>
                        <p>State</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: Satendra Sahu</p>
                        <p>: 11-April-1997</p>
                        <p>: Indian</p>
                        <p>: The Hindu</p>
                        <p>: Hindi, English</p>
                        <p>: India</p>
                        <p>: Madhya Pradesh</p>
                        <p>: 111 GrantTruck Road, Vijay Nagar Indore(MP)</p>
                    </div>
                </div>

            </div>
            <a href="https://docs.google.com/document/d/1B7F0tOIJQeiKy4QrRsAHsDDjCyXBH4zyqYHthdQeXt0/edit?usp=sharing" download="satendra Sahu Resume"
                target="_blank" rel="noreferrer" className="btn"><i class="fa fa-download"></i> DownLoad CV</a>
            <a href="https://docs.google.com/document/d/1B7F0tOIJQeiKy4QrRsAHsDDjCyXBH4zyqYHthdQeXt0/edit?usp=sharing" download="satendra Sahu Resume"
                target="_blank" rel="noreferrer" className="btn"><i class="fa fa-download"></i> DownLoad Resume</a>

        </div>
    )

}

export default ImageSection