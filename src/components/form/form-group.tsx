import * as React from 'react';
import * as classnames from 'classnames';

export default (props) => {
    const {children, text, size} = props;
    const label = text ? (<label>{text}</label>): null;
    const classes = classnames('form-group', {
        'col-md-3': (size === '3'),
    });

    return (
        <div className={classes}>
            {label}
            {children}
        </div>
    );
}