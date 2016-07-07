import * as React from 'react';
import * as $ from 'jquery';

import {InputProps} from "../form/input";
import CSSProperties = __React.CSSProperties;

export interface IPieChartOptions {
    options: kendo.dataviz.ui.ChartOptions;
}

export default class PieChart extends React.Component<IPieChartOptions, any> {
    componentDidMount() {
        const {node} = this.refs;
        const {options} = this.props;
        $(node).kendoChart(options['options']);
    }

    componentWillUnmount() {
        const {node} = this.refs;
        var el = $(node).data('kendoChart')
        el.destroy();
    }

    render() {
        return (
            <div>
                <div  ref="node"></div>
            </div>
        );
    }
}