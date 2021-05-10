import React, { Component } from 'react';
import GoBackButton from '../GoBackButton';
import InputField from './InputField';
import InputIcon from '../InputIcon';
import PasswordIcon from '../PasswordIcon';
import SignupButton from './SignupButton';
import Alert from '../Alert';

class SignupBox extends Component {
    state = {
        /**
         * The current alert message to display.
         */
        alertMessage: '',

        /**
         * The current type of alert to display. 
         * Supported values: ['info', 'success', 'warning', 'danger']
         */
        alertType: 'warning',

        /**
         * Whether the alert should be hidden on the page.
         * Supported values: [false, true]
         */
        isHidden: true,

        /**
         * The current CSS class of the username input.
         */
        userInputClassName: 'form-control',

        /**
         * The input icon for password1.
         */
        password1Icon: 'bi bi-eye-fill',

        /**
         * The current CSS class of the password1 input.
         */
        password1ClassName: 'form-control',

        /**
         * The password1 field type.
         */
        password1FieldType: 'password',

        /**
         * The input icon for password2.
         */
         password2Icon: 'bi bi-eye-fill',

        /**
         * The current CSS class of the password2 input.
         */
        password2ClassName: 'form-control',

        /**
         * The password2 field type.
         */
        password2FieldType: 'password',

        /**
         * Whether signup button is disabled.
         */
        isDisabled: true
    };

    /**
     * Validates the username field.
     */
    usernameValidation = () => {
        const userInput = document.getElementById('username').value;
        if (userInput.length < 1)
        {
            this.setState({
                alertMessage: 'The username cannot be empty.',
                isHidden: false,
                alertType: 'warning',
                userInputClassName: 'form-control is-invalid',
                isDisabled: true
            });
        }
        else if (this.validateUsername(userInput) === false) {
            this.setState({
                alertMessage: 'The username is not a valid email.',
                isHidden: false,
                alertType: 'warning',
                userInputClassName: 'form-control is-invalid',
                isDisabled: true
            });
        }
        else {
            this.setState({
                alertMessage: '',
                isHidden: true,
                alertType: '',
                userInputClassName: 'form-control is-valid',
                isDisabled: false
            });
        }
    }

    /**
     * Validates the username is a valid email.
     * 
     * @param {string} username The username to validate.
     * @returns true if vaid or false if not.
     */
    validateUsername (username) {
        const regex = /\S+@\S+\.\S+/;
    
        return regex.test(username);
    }

    /**
     * Changes the password1 icon on the page.
     */
    changePassword1Icon = () => {
        if (this.state.password1Icon === 'bi bi-eye-fill')
        {
                this.setState({
                    password1Icon: 'bi bi-eye-slash-fill',
                    password1FieldType: 'text'
                });
        }
        else {
            this.setState({
                    password1Icon: 'bi bi-eye-fill',
                    password1FieldType: 'password'
            });
        }
    }
    
    /**
     * Changes the password2 icon on the page.
     */
     changePassword2Icon = () => {
        if (this.state.password2Icon === 'bi bi-eye-fill')
        {
                this.setState({
                    password2Icon: 'bi bi-eye-slash-fill',
                    password2FieldType: 'text'
                });
        }
        else {
            this.setState({
                    password2Icon: 'bi bi-eye-fill',
                    password2FieldType: 'password'
            });
        }
    }

    /**
     * Validates password1.
     */
    validatePassword1 = () => {
        const password1 = document.getElementById("password1").value;
        const password2 = document.getElementById("password2").value;

        const passwordLength = this.verifyPassowrdLength(password1);
        const passwordMatch = this.verifyPasswordMatch(password1, password2);

        if (passwordLength === true && passwordMatch === true) {
            this.setState({
                alertMessage: '',
                isHidden: true,
                alertType: '',
                password1ClassName: 'form-control is-valid',
                password2ClassName: 'form-control is-valid',
                isDisabled: false
            })
        }
        else {
            if (passwordLength === false) {
                this.setState({
                    alertMessage: 'The password must be at least 10 characters in length.',
                    isHidden: false,
                    alertType: 'warning',
                    password1ClassName: 'form-control is-invalid',
                    isDisabled: true
                });
            }
            else {
                

                this.setState({
                    alertMessage: 'The passwords do not match.',
                    isHidden: false,
                    alertType: 'warning',
                    password1ClassName: 'form-control is-invalid',
                    isDisabled: true
                });
            }
            
        }
    }

    /**
     * Validates password2.
     */
     validatePassword2 = () => {
        const password1 = document.getElementById("password1").value;
        const password2 = document.getElementById("password2").value;

        const passwordLength = this.verifyPassowrdLength(password2);
        const passwordMatch = this.verifyPasswordMatch(password2, password1);

        if (passwordLength === true && passwordMatch === true) {
            this.setState({
                alertMessage: '',
                isHidden: true,
                alertType: '',
                password1ClassName: 'form-control is-valid',
                password2ClassName: 'form-control is-valid',
                isDisabled: false
            })
        }
        else {
            if (passwordLength === false) {
                this.setState({
                    alertMessage: 'The password must be at least 10 characters in length.',
                    isHidden: false,
                    alertType: 'warning',
                    password2ClassName: 'form-control is-invalid',
                    isDisabled: true
                });
            }
            else {
                this.setState({
                    alertMessage: 'The passwords do not match.',
                    isHidden: false,
                    alertType: 'warning',
                    password2ClassName: 'form-control is-invalid',
                    isDisabled: true
                });
            }
            
        }
    }

    /**
     * Verifies the length of the password.
     * 
     * @param {string} password The password which length will be validated.
     * @returns true if a valid length or false if not.
     */
    verifyPassowrdLength(password) {
        if (password.trim().length >= 10) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Verifies both passwords entered match.
     * 
     * @param {string} password1 The first password entered by the user.
     * @param {string} password2 The second password entered by the user.
     * 
     * @return true if the passwords match or false if not.
     */
    verifyPasswordMatch(password1, password2) {
        if (password1 === password2) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        return (
            <div>
                <GoBackButton link="/" />
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12">
                            <h3>Signup</h3>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Alert elId="signupAlert" alertType={this.state.alertType} message={this.state.alertMessage} isHidden={this.state.isHidden} />
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12">
                            <div className="input-group mb-3">
                                <InputIcon elid="username-icon" iconClass="bi bi-person-fill" />
                                <InputField elId="username" fieldType="text" placeholder="Username" classNameValue={this.state.userInputClassName} onBlurValidation={this.usernameValidation} onKeyUpValidation={this.usernameValidation}
                                    tooltipPos="right" tooltipText="Username should be a valid email. Ex. mypassmanager@mail.com" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12">
                        <div className="input-group mb-3">
                                <PasswordIcon iconClass={this.state.password1Icon} changeIcon={this.changePassword1Icon} />
                                <InputField elId="password1" fieldType={this.state.password1FieldType} placeholder="Enter Password" classNameValue={this.state.password1ClassName} onFocusValidation={this.validatePassword} 
                                    onBlurValidation={this.validatePassword1} onKeyUpValidation={this.validatePassword1} tooltipPos="right" tooltipText="Password must be at least 10 characters. Special characters recommended, but not required." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12">
                        <div className="input-group mb-3">
                                <PasswordIcon iconClass={this.state.password2Icon} changeIcon={this.changePassword2Icon} />
                                <InputField elId="password2" fieldType={this.state.password2FieldType} placeholder="Re-enter Password" classNameValue={this.state.password2ClassName} onFocusValidation={this.validatePassword} 
                                    onBlurValidation={this.validatePassword2} onKeyUpValidation={this.validatePassword2} tooltipPos="right" tooltipText="Please retype your password." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12">
                        <div className="input-group mb-3">
                                <SignupButton isDisabled={this.state.isDisabled} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignupBox;