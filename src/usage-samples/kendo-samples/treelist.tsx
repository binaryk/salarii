import * as React from 'react';
import Treelist from '../../components/kendo/treelist';
import TreeListOptions = kendo.ui.TreeListOptions;
import Panel from '../../components/panel';

export default (props) => {
    var treeListOptions: TreeListOptions = {
        dataSource: {
            transport: {
                read: {
                    url: "//demos.telerik.com/kendo-ui/service/EmployeeDirectory/All",
                    dataType: "jsonp"
                }
            },
            schema: {
                model: {
                    id: "EmployeeID",
                    parentId: "ReportsTo",
                    fields: {
                        ReportsTo: { field: "ReportsTo",  nullable: true },
                        EmployeeID: { field: "EmployeeId", type: "number" },
                        Extension: { field: "Extension", type: "number" }
                    },
                    expanded: true
                }
            }
        },
        height: 540,
        filterable: true,
        sortable: true,

        columns: [
            { field: "FirstName", title: "First Name", width: 280,
                template:  `<div class='employee-photo'
                                style='background-image: url(../content/web/treelist/people/#:data.EmployeeID#.jpg);'></div>
                <div class='employee-name'>#: FirstName #</div>`
            },
            { field: "LastName", title: "Last Name", width: 160 },
            { field: "Position" },
            { field: "Phone", width: 200 },
            { field: "Extension", width: 140 },
            { field: "Address" }
        ]
    };
    return (
    <Panel heading="Kendo TreeList example">
        <Treelist
            treeListOptions={treeListOptions}
        />
    </Panel>
        );
}