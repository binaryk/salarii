import * as React from 'react';

export default (props) => (
    <input
        type="date"
        className="form-control"
        onChange={props.onChange}
    />
);