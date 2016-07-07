import * as React from 'react';

export default (props) => (
    <input
        type="time"
        className="form-control"
        onChange={props.onChange}
    />
);
