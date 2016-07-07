import * as React from 'react';
import Grid from '../../components/kendo/grid';
import GridOptions = kendo.ui.GridOptions;
import Panel from '../../components/panel';

export default (props) => {
    
    const dataSource = new kendo.data.DataSource({
        type: "odata",
            transport: {
            read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
        },
        pageSize: 20
    });
    var gridOptions: GridOptions = {
        dataSource: dataSource,

        height: 550,
        groupable: true,
        sortable: true,
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        columns: [{
            template: "<div class='customer-photo'" +
            "style='background-image: url(../content/web/Customers/#:data.CustomerID#.jpg);'></div>" +
            "<div class='customer-name'>#: ContactName #</div>",
            field: "ContactName",
            title: "Contact Name",
            width: 240
        }, {
            field: "ContactTitle",
            title: "Contact Title"
        }, {
            field: "CompanyName",
            title: "Company Name"
        }, {
            field: "Country",
            width: 150
        }]
    };
    return (
    <Panel heading="Kendo grid example">
        <Grid
            gridOptions={gridOptions}
        />
    </Panel>
        );
}