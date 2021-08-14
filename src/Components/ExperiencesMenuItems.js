import React from 'react'

/**
* @author 
* @function ExperiencesMenuItems
**/

const ExperiencesMenuItems = ({ menuItem }) => {
    return (
        <div className="portfolios">
            {
                menuItem.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link1}>{item.icon1}</a>
                                    {/* <a href={item.link2}>{item.icon2}</a> */}
                                </li>
                            </ul>
                        </div>
                        <h5>{item.title}</h5>
                        
                        <p>Joining Date : {item.StartDate}</p>
                        <p>End Date : {item.EndDate}</p>
                        <p>Company : {item.Company}</p>
                        <p>Location Date : {item.Location}</p>
                        <p>Work Status : {item.WorkStatus}</p>

                       
                        
                        <textarea className="textareadesc" value={item.detailedDescription} rows="5" disabled></textarea>
                    </div>
                })
            }
        </div>
    )

}

export default ExperiencesMenuItems
