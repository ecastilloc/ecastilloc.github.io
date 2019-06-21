import React from 'react';
import './Logo.css';

const Logo = props => (
    <div className="logo-container">
        <div className="logo"></div>
        <div className="author-img"></div>
        <h1 className="author-name">Emmanuel Castillo</h1>
        <span className="author-email">ecastilloc@outlook.com</span>
    </div>
);

export default Logo;