import { Component } from 'react';
import { Link } from 'react-router-dom';

class GoBackButton extends Component {
    render() {
        const {
            /**
             * The link of where the page will go back to.
             */
            link 
        } = this.props;

        return <Link to={link}><button className="btn btn-outline-secondary"><i className="bi bi-chevron-left"></i>Go Back</button></Link>
    }
}

export default GoBackButton;