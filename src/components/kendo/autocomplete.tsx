import * as React from 'react';
import * as $ from 'jquery';

import {InputProps} from "../form/input";
import CSSProperties = __React.CSSProperties;

export interface IAutocompleteProps extends InputProps {
    options: kendo.ui.AutoCompleteOptions;
}

export default class Autocomplete extends React.Component<IAutocompleteProps, any> {
    componentDidMount() {
        const {node} = this.refs;
        const {options} = this.props;
        $(node).kendoAutoComplete(options['options']);
    }

    render() {
        return (
            <div>
                <input ref="node"/>
            </div>
        );
    }
}