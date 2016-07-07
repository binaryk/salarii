import * as React from 'react';
import * as $ from 'jquery';
import CSSProperties = __React.CSSProperties;

export interface ISpreadSheetProps {
    options: kendo.ui.SpreadsheetOptions;
    style?: any;
}

export default class SpreadSheet extends React.Component<ISpreadSheetProps, any> {
    componentDidMount() {
        const {node} = this.refs;
        const {options} = this.props;
        $(node).kendoSpreadsheet(options['options']);
    }

    componentWillUnmount() {
        const {node} = this.refs;
        var el = $(node).data('kendoSpreadsheet')
        el.destroy();
    }

    render() {
        const {style} = this.props;
        return (
            <div ref="node" style={style}></div>
        );
    }
}