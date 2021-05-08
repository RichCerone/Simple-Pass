import { Component } from "react";

class PasswordIcon extends Component {
    render() {
        const {iconClass, changeIcon} = this.props;

        return <span className="input-group-text" id="masterPasswordIcon" onClick={() => changeIcon()}><i className={iconClass}></i></span>;
    }
}

export default PasswordIcon;