import React, { Component } from 'react';
import InputField from '../InputField';
import InputIcon from '../InputIcon';
import PasswordIcon from './PasswordIcon';
import Alert from '../Alert';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';

class LoginBox extends Component {
    state = {
        passwordIcon: 'bi bi-eye-fill',
        passwordFieldType: 'password',
        alertMessage: '',
        alertType: '',
        isHidden: 'false'
    }
    changeIcon = () => {
       if (this.state.passwordIcon === 'bi bi-eye-fill')
       {
            this.setState({
                passwordIcon: 'bi bi-eye-slash-fill',
                passwordFieldType: 'text'
            });
       }
       else {
           this.setState({
                passwordIcon: 'bi bi-eye-fill',
                passwordFieldType: 'password'
           });
       }
    }
    showPassword = () => {
        this.setState({
            passwordFieldType: 'text'
        });
    }
    render() {
        return(
            <div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12">
                            <h3>Login</h3>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12">
                            <Alert elId="loginAlert" alertType={this.state.alertType} message={this.state.message} isHidden={this.state.isHidden} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="input-group mb-3">
                            <InputIcon elid="username-icon" iconClass="bi bi-person-fill" />
                            <InputField elId="username" fieldType="text" placeholder="Username" classNameValue="form-control" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="input-group mb-3">
                            <PasswordIcon iconClass={this.state.passwordIcon} changeIcon = {this.changeIcon} />
                            <InputField eldId="password" fieldType={this.state.passwordFieldType} placeholder="Password" classNameValue="form-control" />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className='row'>
                        <div className="col-12">
                            <LoginButton />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12">
                            <SignupButton />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginBox;