import * as React from 'react';
import * as $ from 'jquery';

import {InputProps} from "../form/input";
import CSSProperties = __React.CSSProperties;

export interface ISwitchProps extends InputProps {
    options: kendo.mobile.ui.SwitchOptions;
    label?: any;
}

export default class Switch extends React.Component<ISwitchProps, any> {
    componentDidMount() {
        const {node} = this.refs;
        const {options} = this.props;
        $(node).kendoMobileSwitch(options['options']);
    }

    render() {
        const {label} = this.props;

        return (
            <div>
                {label}<input ref="node" />
            </div>
        );
    }
}