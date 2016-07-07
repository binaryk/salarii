import * as React from 'react';

interface CheckboxInput {
    name: string;
    value: string;
    label?: string;
    onChange?: React.FormEventHandler;
}

export default (props: CheckboxInput) => {
    const {name, value, label} = props;

    const input = (<input
        type="checkbox"
        name={name}
        value={value}
    />);
    const labelComponent = label ? (<label>{input}{label}</label>) : {input};

    return (
        <div className="checkbox">
            {labelComponent}
        </div>
    );
}