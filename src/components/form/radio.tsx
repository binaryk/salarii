import * as React from 'react';

interface RadioInput {
    name: string;
    value: string;
    label?: string;
    onChange?: React.FormEventHandler
}

export default (props: RadioInput) => {
    const {name, value, label, onChange} = props;

    const input = (<input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
    />);
    const labelComponent = label ? (<label>{input}{label}</label>) : {input};

    return (
        <div className="radio">
            {labelComponent}
        </div>
    );
}