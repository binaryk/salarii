import * as React from 'react';

export default (props) => {
    const {legend, children} = props;

    const legendComponent = legend ? <legend>{legend}</legend> : null;
    return (
        <fieldset>
            {legendComponent}
            {children}
        </fieldset>
    )
}