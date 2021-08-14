import React, { useState } from 'react';
import Title from '../Components/Titles';
import allExperiences from '../Components/allExperiences';
import ExperiencesCategories from '../Components/ExperiencesCategories';
import ExperiencesMenuItems from '../Components/ExperiencesMenuItems';
/**
* @author 
* @function ExperiencePage
**/

//menuItem={menuItems}
const x = window.matchMedia("(max-width: 700px)")
const allCategories = ['All', ...new Set(allExperiences.map(item => item.category))];
const ExperiencePage = (props) => {
    const [categories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(allExperiences);
    const filter = (category) => {
        if (category === "All") {
            setMenuItems(allExperiences)
            return;
        }
        const filteredData = allExperiences.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData);
    }
    return (
        <div className="PortfolioPage">
            <div className="title">

                {
                    (x.matches)

                        ? <Title title={'My Experiences'} span={'Experiences'} />
                        : <Title title={'My Experiences'} span={'Experiences'} />
                }


            </div>
            <div className="allProjects-data">
                <ExperiencesCategories filter={filter} categories={categories} />
                <ExperiencesMenuItems menuItem={menuItems} />
            </div>
        </div>
    )

}

export default ExperiencePage


