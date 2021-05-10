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
        let iconCss = '';
        switch (alertType.toLowerCase()) {
            case 'info':
                alertCss = 'alert alert-info';
                iconCss = 'bi bi-info-circle-fill';
                break;

            case 'success':
                alertCss = 'alert alert-success';
                iconCss = 'bi bi-check-circle-fill';
                break;

            case 'warning':
                alertCss = 'alert alert-warning';
                iconCss = "bi bi-exclamation-circle-fill";
                break;

            case 'danger':
                alertCss = 'alert alert-danger';
                iconCss = 'bi bi-x-circle-fill'
                break;

            default:
                alertCss = 'alert alert-info';
                iconCss = 'bi bi-info-circle-fill';
                break;
        }

        // Check if alert should be shown on page or not.
        if (isHidden)
        {
            alertCss += ' d-none';
        }

        return(
            <div id={elId} className={alertCss}>
                <i className={iconCss}></i> {message}
            </div>
        );
    }
}

export default Alert;