import * as React from 'react';
import * as $ from 'jquery';

import DataSource = kendo.data.DataSource;
import GridOptions = kendo.ui.GridOptions;
import GridChangeEvent = kendo.ui.GridChangeEvent;

interface IGridProps {
    gridOptions?:GridOptions;
    dataSource?: DataSource;
}

export default class Grid extends React.Component<IGridProps, any> {
    gridOptions:GridOptions;

    constructor() {
        super();

        this.gridOptions = {
            height: 280,
            groupable: true,
            sortable: true,
            selectable: true,
            pageable: {
                refresh: false,
                pageSizes: true,
                buttonCount: 5
            }
        };
    }

    componentDidMount() {
        const {gridRef} = this.refs;
        const {gridOptions, dataSource} = this.props;

        this.gridOptions = Object.assign(this.gridOptions, gridOptions || {});
        if (dataSource) {
            this.gridOptions.dataSource = dataSource;
        }

        $(gridRef).kendoGrid(
            this.gridOptions
        );
    }

    componentWillUnmount() {
        const {gridRef} = this.refs;
        var grid = $(gridRef).data('kendoGrid')
        grid.destroy();
    }

    render() {
        return (
            <div ref="gridRef"/>
        );
    }

    exportToExcel() {
        const {gridRef} = this.refs;
        var grid = $(gridRef).data('kendoGrid')
        grid.saveAsExcel();
    }

    exportToPdf() {
        const {gridRef} = this.refs;
        var grid = $(gridRef).data('kendoGrid')
        grid.saveAsPDF();

    }
}