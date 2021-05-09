import { Component } from "react";

/**
 * Shows alert messages to the user.
 */
class Alert extends Component {
    render() {
        const { 
            /**
             * The JSX element's id.
             */
            elId,

            /**
             * The type of alert to display.
             * Supported values: ['info', 'success', 'warning', 'danger']
             */
            alertType, 

            /**
             * The message to display in the alert.
             */
            message, 

            /**
             * Whether alert is hidden on the page.
             * Supported values: ['false', 'true']
             */
            isHidden
        } = this.props;

        // Determine alert type to show.
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

        // Check if alert should be shown on page or not.
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