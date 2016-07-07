import * as React from 'react';
import * as classnames from 'classnames';

export interface INativeButton {
    text?:string;
    classes:{[id:string]:string} | Array<string>;
    onClick?: React.FormEventHandler;
}
export default (props) => {
    const {text, classes, onClick} = props;
    const classNames = classnames('btn', 'btn-default', classes);
    return (<input
        type="button"
        className={classNames}
        defaultValue={text}
        onClick={onClick}
    />);
};
