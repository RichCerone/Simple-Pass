import { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Signup button for directing the user to the signup page.
 */
class SignupButton extends Component {
    render() {
        return <Link to="/signup"><button className="btn btn-link" id="signup">New? Create an account!</button></Link>;
    }
}

export default SignupButton;