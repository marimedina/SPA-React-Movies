import React from 'react';

const Header = ({titulo}) => {
    return ( 
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">{titulo}</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Header;