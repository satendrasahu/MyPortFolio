import React from 'react'

/**
* @author 
* @function MenuItems
**/

const MenuItems = ({ menuItem }) => {
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
                                    <a href={item.link2}>{item.icon2}</a>
                                </li>
                            </ul>
                        </div>
                        <h5>{item.title}</h5>
                        <textarea className="textareadesc" value={item.detailedDescription} rows="10" disabled></textarea>
                    </div>
                })
            }
        </div>
    )

}

export default MenuItems
































// import React from 'react'
// import { Link } from 'react-router-dom'
// /**
// * @author
// * @function ProjectsMenuItem
// **/

// const ProjectsMenuItem = ({ projectMenuItem }) => {
//     return (
//         <div className="portfolios">
//             {
//                 projectMenuItem.map((item) => {
//                     return <div className="portfolio" key={item.id}>
//                         <div className="image-data">
//                             <img src={item.image} alt="" />
//                             <ul className="hover-items">
//                                 <li>
//                                     <a href={item.link1}>{item.icon1}</a>
//                                     <a href={item.link2}>{item.icon2}</a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="ProjectDescription">

//                             <h5>{item.title}</h5>
//                             <textarea className="textareadesc" value={item.detailedDescription} rows="10" disabled></textarea>
//                         </div>

//                     </div>
//                 })
//             }
//         </div >
//     )


// }

// export default ProjectsMenuItem