import React, { Component } from 'react';

/**
 * Any input field the user can input text into.
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
             * Any CSS class value to show on the JSX component.
             */
            classNameValue 
        } = this.props;

        return <input id={elId} type={fieldType} placeholder={placeholder} className={classNameValue} aria-label={elId} aria-describedby={elId} />;
    }
}

export default InputField;