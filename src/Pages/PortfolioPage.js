import React, { useState } from 'react';
import Categories from '../Components/Categories';
import Title from '../Components/Titles';
import MenuItems from '../Components/MenuItems';
import portfolios from '../Components/allprotfolios';
/**
* @author
* @function PortfolioPage
**/
const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];
const PortfolioPage = (props) => {
    const [categories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);
    const filter = (category) => {
        if (category === "All") {
            setMenuItems(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData);
    }
    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolios'} span={'Portfolios'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    )

}

export default PortfolioPage