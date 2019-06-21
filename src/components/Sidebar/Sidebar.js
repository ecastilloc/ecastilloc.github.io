import React from 'react';
import './Sidebar.css';
import Logo from '../Logo/Logo';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = props => (
    <header className="sidebar">
        <Logo></Logo>
        <nav className="navigation-bar">
            <div className="navitation-items">
                <ul>
                    <li>Introduction</li>
                    <li>About</li>
                    <li>Timeline</li>
                </ul>
            </div>
        </nav>
        <nav className="navigation-icons-bar">
            <div className="navitation-icons-items">
                <ul>
                {/* https://scotch.io/tutorials/using-font-awesome-5-with-react */}
                <li><a href="https://www.facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li><a href="https://twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                <li><a href="https://github.com/" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></li>
                </ul>
            </div>
        </nav>
    </header>    
);

export default Sidebar;