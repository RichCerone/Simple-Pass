import React, { Component } from 'react';

class SignupButton extends Component {
    render() {
        /**
         * Whether the button is disabled or not.
         */
        const { isDisabled } = this.props;

        if (isDisabled) {
            return <button type="button" className="btn btn-outline-success" aria-label="signup" aria-describedby="signup" id="signup" title="Signup" disabled>Signup</button>;
        }
        else {
            return <button type="button" className="btn btn-outline-success" id="signup" title="Signup">Signup</button>;
        }
    }
}

export default SignupButton;