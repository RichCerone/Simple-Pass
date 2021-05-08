import { Component } from "react";

class Alert extends Component {
    render() {
        const { elId, alertType, message, isHidden} = this.props;
        let alertCss = '';
        switch (alertType.toLowerCase()) {
            case 'info':
                alertCss = 'alert alert-info';
                break;

            case 'success':
                alertCss = 'alert alert-success';
                break;

            case 'warning':
                alertCss = 'alert alert-warning';
                break;

            case 'danger':
                alertCss = 'alert alert-danger';
                break;

            default:
                alertCss = 'alert alert-info';
                break;
        }

        if (isHidden)
        {
            alertCss += ' d-none';
        }

        return(
            <div id={elId} className={alertCss}>
                {message}
            </div>
        );
    }
}

export default Alert;