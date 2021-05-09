import React, {Component} from 'react';

/**
 * Displays the application's navbar.
 */
class NavBar extends Component {
    render()
    {
        const {
            /**
             * The name of the application to display in
             * the navbar title.
             */
            appName
        } = this.props
        
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand">{appName}</span>
                </div>
            </nav>
        );
    }
}

export default NavBar;