import React from 'react'

/**
* @author
* @function ServiceSection
**/

const ServiceSection = ({ image, title, text }) => {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <div className="center">
                        <img src={image} alt="" />
                    </div>

                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )

}

export default ServiceSection