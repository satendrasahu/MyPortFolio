import React from 'react'

/**
* @author
* @function Title
**/

const Title = ({ title, span }) => {
    return (
        <div className="Title">
            <h3>
                {title}
                <span> {span}</span>
            </h3>
        </div>
    )

}

export default Title