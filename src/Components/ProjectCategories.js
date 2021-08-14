

import React from 'react';

/**
* @author
* @function ProjectsCategories
**/

const ProjectsCategories = ({ filter, categories }) => {
    return (
        <div className="buttons">
            {
                categories.map((cat, i) => {
                    return <button type="button" className="btn-port" onClick={() => filter(cat)} key={i}>{cat}</button>
                })
            }
        </div>)

}

export default ProjectsCategories















// import React from 'react';

// /**
// * @author
// * @function ProjectCategories
// **/

// const ProjectCategories = ({ filter, categories }) => {
//     return (
//         <div className="buttons">
//             {
//                 categories.map((cat, i) => {
//                     return <button type="button" className="btn-port" onClick={() => filter(cat)} key={i}>{cat}</button>
//                 })
//             }
//         </div>)

// }

// export default ProjectCategories