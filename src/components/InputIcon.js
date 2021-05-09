import { Component } from "react";

/**
 * An input icon to display with a given InputComponent
 */
class InputIcon extends Component {
    render() {
        const {
            /**
             * The JSX element's id.
             */
            elId, 

            /**
             * The css icon class to display on the JSX component.
             */
            iconClass 
        } = this.props;

        return <span className="input-group-text" id={elId}><i className={iconClass}></i></span>;
    }
}

export default InputIcon;