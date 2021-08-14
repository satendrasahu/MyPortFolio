import React, { useState } from 'react';
import Title from '../Components/Titles';
import ProjectsMenuItems from '../Components/ProjectsMenuItems';
import allProjects from '../Components/allProjects';
import ProjectsCategories from '../Components/ProjectCategories';
/**
* @author 
* @function PortfolioPage
**/

//menuItem={menuItems}
const x = window.matchMedia("(max-width: 700px)")
const allCategories = ['All', ...new Set(allProjects.map(item => item.category))];
const ProjectsPage = (props) => {
    const [categories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(allProjects);
    const filter = (category) => {
        if (category === "All") {
            setMenuItems(allProjects)
            return;
        }
        const filteredData = allProjects.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData);
    }
    return (
        <div className="PortfolioPage">
            <div className="title">

                {
                    (x.matches)

                        ? <Title title={'My Projects'} span={'Projects'} />
                        : <Title title={'My Projects'} span={'Projects'} />
                }


            </div>
            <div className="allProjects-data">
                <ProjectsCategories filter={filter} categories={categories} />
                <ProjectsMenuItems menuItem={menuItems} />
            </div>
        </div>
    )

}

export default ProjectsPage

























// import React, { useState } from 'react';
// import Title from '../Components/Titles';
// import ProjectsMenuItems from '../Components/ProjectsMenuItems';
// import allprojects from '../Components/allProjects';
// import ProjectCategoris from '../Components/ProjectCategories';
// /**
// * @author
// * @function allProjectsCategories
// **/
// const allProjectsCategories = ['All', ...new Set(allprojects.map(item => item.category))];
// const PortfolioPage = (props) => {
//     const [categories] = useState(allProjectsCategories);
//     const [projectsMenuItems, setProjectsMenuItems] = useState(allprojects);
//     const filter = (category) => {
//         if (category === "All") {
//             setProjectsMenuItems(allprojects)
//             return;
//         }
//         const filteredData = allprojects.filter((item) => {
//             return item.category === category;
//         })
//         setProjectsMenuItems(filteredData);
//     }
//     return (
//         <div className="PortfolioPage">
//             <div className="title">
//                 <Title title={'My Projects'} span={'My Projects'} />
//             </div>
//             <div className="allprojects-data">
//                 <ProjectCategoris filter={filter} categories={categories} />
//                 <ProjectsMenuItems projectMenuItem={projectsMenuItems} />
//             </div>
//         </div>
//     )

// }

// export default PortfolioPage