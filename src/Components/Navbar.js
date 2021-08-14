import React from 'react'
//aimport satendra from '../img/satendra.jpg';
import satendraSahu from '../img/satendraSahu.jpg';
import { NavLink } from 'react-router-dom'

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={satendraSahu} alt="Satendra's Pic" />
                    <h6>Satendra Sahu</h6>
                </div>

                <ul className="nav-items">

                    <li className="nav-item">
                        <NavLink to="/" exact={true} activeClassName="active">
                            Home
                    </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/about" exact={true} activeClassName="active">
                            About
                    </NavLink>
                    </li>
                   
                    {/* <li className="nav-item">
                        <NavLink to="/portfolios" exact={true} activeClassName="active">
                            Portfolios
                    </NavLink>
                    </li> */}
                    
                    <li className="nav-item">
                        <NavLink to="/projects" exact={true} activeClassName="active">
                            Projects
                    </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/experiences" exact={true} activeClassName="active">
                            Experiences
                    </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact={true} activeClassName="active">
                            Blogs
                    </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact={true} activeClassName="active">
                            Contacts
                    </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>@2021 sahu's the classic </p>
                </footer>
            </nav>
        </div>
    )

}

export default Navbar