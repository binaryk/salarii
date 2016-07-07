import * as React from 'react';
import * as $ from 'jquery';

import {InputProps} from "../form/input";
import CSSProperties = __React.CSSProperties;

export interface IListViewProps{
    options: kendo.ui.ListViewOptions;
}

export default class ListView extends React.Component<IListViewProps, any> {
    componentDidMount() {
        const {node, pager} = this.refs;
        const {options} = this.props;
        $(node).kendoListView(options['options']);
    }

    componentWillUnmount() {
        const {node} = this.refs;
        var nodeList = $(node).data('kendoListView')
        nodeList.destroy();
    }

    render() {
        return (
            <div ref="node"></div>
        );
    }
}




export class Pager extends React.Component<IListViewProps, any> {
    componentDidMount() {
        const {pager} = this.refs;
        const {options} = this.props;

        $(pager).kendoPager({
            dataSource: options['options']['dataSource']
        });

    } 

    render() {
        return (
            <div ref="pager" className="k-pager-wrap"></div>
        );
    }
}