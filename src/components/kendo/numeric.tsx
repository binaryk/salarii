import * as React from 'react';
import * as $ from 'jquery';

import {InputProps} from "../form/input";
import CSSProperties = __React.CSSProperties;

export interface INumericProps extends InputProps {
    options: kendo.ui.NumericTextBoxOptions;
    min?:number;
    max?:any;
    value?:any;
}

export default class Numeric extends React.Component<INumericProps, any> {
    componentDidMount() {
        const {node} = this.refs;
        const {options} = this.props;
        $(node).kendoNumericTextBox(options['options']);
    }

    render() {
        return (
            <div>
                <input ref="node" type="number" {...this.props} />
            </div>
        );
    }
}