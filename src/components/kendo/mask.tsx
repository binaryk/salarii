import * as React from 'react';
import * as $ from 'jquery';

import {InputProps} from "../form/input";
import CSSProperties = __React.CSSProperties;

export interface IMaskProps extends InputProps {
    options: kendo.ui.MaskedTextBoxOptions;
}

export default class Mask extends React.Component<IMaskProps, any> {
    componentDidMount() {
        const {node} = this.refs;
        const {options} = this.props;
        $(node).kendoMaskedTextBox(options['options']);
    }

    render() {
        return (
            <input ref="node"/>
        );
    }
}