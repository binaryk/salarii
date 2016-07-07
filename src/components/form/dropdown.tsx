import * as React from 'react';
import {List} from 'immutable';

interface IFuncOfString {
    (string): string;
}
export interface IDropdownOption {
    get: IFuncOfString
}

export interface IDropdown{
    options: List<IDropdownOption>;
    selected?: string;
    onChange?: React.FormEventHandler
}

export default (props: IDropdown) => {
    const {options, selected, onChange} = props;
    const optionComponents = (options||List<IDropdownOption>()).map((option, index) => {
        const value = option.get('value');
        const text = option.get('text');
        return (<option
            key={index}
            value={value}
            >{text}</option>
            );
    })
    return (<select className="form-control" defaultValue={selected} onChange={onChange}>
        {optionComponents}
    </select>);
}