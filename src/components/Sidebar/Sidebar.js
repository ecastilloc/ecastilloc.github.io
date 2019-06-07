import React from 'react';
import './Sidebar.css';

const Sidebar = props => (
    <header className="sidebar">
        <nav className="sidebar__navigation">
            <div></div>
            <div className="sidebar__logo"><a href="/">THE LOGO</a></div>
            <div className="sidebar_navigation-items">
                <ul>
                    <li><a href="/">Something about me</a></li>
                    <li><a href="/">My projects</a></li>
                    <li><a href="/">My fav books</a></li>
                    <li><a href="/">..more</a></li>
                </ul>
            </div>

        </nav>
    </header>    
);

export default Sidebar;