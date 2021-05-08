import { Component } from "react";

class InputIcon extends Component {
    render() {
        const { elId, iconClass } = this.props;

        return <span className="input-group-text" id={elId}><i className={iconClass}></i></span>;
    }
}

export default InputIcon;