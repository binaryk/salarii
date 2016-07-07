import * as React from 'react';
import * as $ from 'jquery';

import {InputProps} from "../form/input";
import CSSProperties = __React.CSSProperties;

export interface IColorPickerProps extends InputProps {
    options: kendo.ui.ColorPickerOptions;
}

export default class ColorPicker extends React.Component<IColorPickerProps, any> {
    componentDidMount() {
        const {node} = this.refs;
        const {options} = this.props;
        $(node).kendoColorPicker(options['options']);
    }

    render() {
        return (
            <div>
                <input ref="node"/>
            </div>
        );
    }
}