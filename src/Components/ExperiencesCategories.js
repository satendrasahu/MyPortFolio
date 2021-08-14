import React from 'react';

/**
* @author
* @function ExperiencesCategories
**/

const ExperiencesCategories = ({ filter, categories }) => {
    return (
        <div className="buttons">
            {
                categories.map((cat, i) => {
                    return <button type="button" className="btn-port" onClick={() => filter(cat)} key={i}>{cat}</button>
                })
            }
        </div>)

}

export default ExperiencesCategories

