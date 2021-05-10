import React, { Component } from 'react';
import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle.min.js';

/**
 * Signup specific input field with built in validation.
 */
class InputField extends Component {
    render() {
        const {
            /**
             * The JSX element's id.
             */
            elId,

            /**
             * The type of the JSX input field to display.
             */
            fieldType, 

            /**
             * Any placeholder value to put in the field.
             */
            placeholder,
            
            /**
             * The current value of the input.
             */
            inputValue,

            /**
             * Any CSS class value to show on the JSX component.
             */
            classNameValue,
            
            /**
             * Validation to perform on blur of the input.
             */
            onBlurValidation,

            /**
             * Validation to perform on key up on the input.
             */
            onKeyUpValidation,

            /**
             * Position of where the tooltip should be placed.
             */
            tooltipPos,

            /**
             * Text to put inside the tooltip.
             */
            tooltipText
        } = this.props;

        return <input id={elId} type={fieldType} placeholder={placeholder} value={inputValue} className={classNameValue} aria-label={elId} aria-describedby={elId} onBlur={() => onBlurValidation()} onKeyUp={() => onKeyUpValidation()} 
            data-bs-toggle="tooltip" data-bs-placement={tooltipPos} title={tooltipText} />;
    }

    componentDidMount() {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new Tooltip(tooltipTriggerEl)
        });
    }
}

export default InputField;