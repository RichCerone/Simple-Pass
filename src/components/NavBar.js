import React, {Component} from 'react';

class NavBar extends Component {
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">Simple Pass</span>
                </div>
            </nav>
        );
    }
}

export default NavBar;