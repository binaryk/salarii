import * as React from 'react';

interface IHaveTarget{
    target: Element;
}
interface EventHandler {
    (ev:IHaveTarget):any;
}
export interface InputProps {
    defaultValue?: any;
    id?: string;
    name?: string;
    onChange?: React.FormEventHandler | any;
    placeholder?: string;
    required?: boolean;
    validationMessage?: string;
    value?:any; 
}
export default (props: InputProps) => (
    <input
        {...props}
        type="text"
        className="form-control"
    />
);
