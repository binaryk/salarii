import * as React from 'react';
import * as $ from 'jquery';

import {InputProps} from "../form/input";
import CSSProperties = __React.CSSProperties;

export interface ISliderProps extends InputProps {
    options: kendo.ui.SliderOptions;
}

export default class Slider extends React.Component<ISliderProps, any> {
    componentDidMount() {
        const {node} = this.refs;
        const {options} = this.props;
        $(node).kendoSlider(options['options']);
    }

    render() {
        return (
            <div>
                <input ref="node"/>
            </div>
        );
    }
}