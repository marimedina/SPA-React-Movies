import React from 'react';

const Header = ({titulo}) => {
    return ( 
        <nav>
            <div className="nav-wrapper light-blue accent-3">
                <a href="#!" className="brand-logo center">{titulo}</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Header;