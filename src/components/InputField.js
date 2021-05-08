import React, { Component } from 'react';

class InputField extends Component {
    render() {
        const { elId, fieldType, placeholder, classNameValue } = this.props;

        return <input id={elId} type={fieldType} placeholder={placeholder} className={classNameValue} aria-label={elId} aria-describedby={elId} />;
    }
}

export default InputField;