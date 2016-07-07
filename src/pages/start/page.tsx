import * as React from 'react';
import {ajax} from 'rxjs/observable/dom/ajax'
import GridOptions = kendo.ui.GridOptions;
import Grid from '../../components/kendo/grid';
import Panel from '../../components/panel';

import {ISubscription} from 'rxjs/Subscription'
import {
    Button,
    ButtonToolbar,
    OverlayTrigger, Tooltip
} from 'react-bootstrap';

import * as access from './context-accessors';
import {
    editSelectedCustomer,
    mapFromServerResponse,
    newCustomer,
    askDeleteConfirmation,
    deleteSelectedCustomer
} from './commands';
import {DataChangedSubject} from './notifications';

import Context, {buildCursorFrom, toImmutable, apiCallTo} from '../../context';

import EditCustomer from './edit-customer';

import DataSource = kendo.data.DataSource;
import DropDownListOptions = kendo.ui.DropDownListOptions;
import GridChangeEvent = kendo.ui.GridChangeEvent;
import GridDataBoundEvent = kendo.ui.GridDataBoundEvent;


var countriesDataSource = new kendo.data.DataSource({
    data: []
});

var companiesDataSource = new kendo.data.DataSource({
    data: []
});

const countries:DropDownListOptions = {
    dataTextField: "text",
    dataValueField: "value",
    dataSource: countriesDataSource
};


const companies:DropDownListOptions = {
    dataTextField: "text",
    dataValueField: "value",
    dataSource: companiesDataSource
};

const customerDataSource:DataSource = new kendo.data.DataSource({
    type: (function () {
        if (kendo.data.transports['aspnetmvc-ajax']) {
            return 'aspnetmvc-ajax';
        }
        else {
            throw new Error('The kendo.aspnetmvc.min.js script is not included.');
        }
    })(),
    transport: {
        read: {
            url: apiCallTo('kendo'),
            dataType: 'json'
        }
    },
    data: {
        'Data': [],
        'Total': 0
    },
    schema: {
        data: 'Data',
        total: 'Total'
    },
    serverPaging: true,
    serverSorting: true,
    serverGrouping: true,
    pageSize: 5
});

class StartPage extends React.Component<any, any> {
    gridOptions:GridOptions;
    subscription:ISubscription;
    dataChangedSubscription:ISubscription;
    refs:any;

    constructor() {
        super();
        const component = this;

        this.gridOptions = {
            excel: {
                allPages: true,
                fileName: 'Customers.xlsx'
            },
            change: function (changeEvent:GridChangeEvent) {
                var grid = changeEvent.sender;
                var rowItem = grid.select()[0] as any;
                var dataItem = grid.dataItem(
                    rowItem
                ) as any;

                editSelectedCustomer({
                    rowIndex: rowItem.rowIndex,
                    customer: mapFromServerResponse(dataItem)
                });
            },
            dataBound: function tryToPreserveSelectedItem(boundEvent:GridDataBoundEvent) {
                const grid = boundEvent.sender;
                const {start} = component.state;
                const selectedRow = access.selectedRow(start);

                const hasSomethingToSelect = (selectedRow > -1 && grid.select().length === 0);

                if (hasSomethingToSelect) {
                    const items = grid.items();
                    const item = items[selectedRow];
                    if (!item) {
                        return;
                    }
                    grid.select(item);
                }
            },
        };
    }

    exportToExcel() {
        const {customerGrid} = this.refs;

        customerGrid.exportToExcel();
    }

    componentWillMount() {
        ajax.post(apiCallTo('kendo/lookups')).subscribe((data:any) => {
            const {response} = data;
            countriesDataSource.data(response.Countries);
            companiesDataSource.data(response.Companies);
        });

        this.subscription = Context.subscribe((cursor) => {
            const pages = access.pages(cursor);
            const start = access.start(pages);
            this.setState({
                start: start || buildCursorFrom(toImmutable({}))
            });
        });

        this.dataChangedSubscription = DataChangedSubject.subscribe(()=> {
            customerDataSource.fetch();
        });
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
        this.dataChangedSubscription.unsubscribe();
    }


    render() {
        const {gridOptions} = this;
        const start = this.state.start;
        const showEditCustomer = (start != null && access.customerModel(start) != null);

        var editCustomer = null;
        if (start) {
            editCustomer = access.customerModel(start);
        }

        const editCustomerComponent = showEditCustomer ? (<EditCustomer
            countries={countries}
            companies={companies}
            customer={editCustomer}
        />) : null;

        const showTooltip = access.confirmDelete(start);
        const confirmDeleteTooltip = <Tooltip
            id="delete-customer-tooltip"
        >
            <p>Confirm delete action</p>
            <Button bsStyle="danger"
                    onClick={() => {
                            deleteSelectedCustomer();
                            this.refs.confirmDeleteOverlay.hide();
                        }
                    }
            >
                Yes
            </Button>
            &nbsp;
            <Button bsStyle="primary"
                    onClick={() => {
                            askDeleteConfirmation(false)
                            this.refs.confirmDeleteOverlay.hide();
                        }

                    }
            >
                Dismiss
            </Button>
        </Tooltip>;

        return (<div>
                <Panel heading="Kendo demo customers">
                    <ButtonToolbar
                        ref="a">
                        <Button
                            bsStyle="primary"
                            onClick={()=>newCustomer()}
                        >
                            <i className="icon-plus"/> New
                        </Button>
                        <OverlayTrigger
                            ref="confirmDeleteOverlay"
                            defaultOverlayShown={showTooltip}
                            trigger="click"
                            placement="bottom"
                            overlay={confirmDeleteTooltip}
                        >
                            <Button
                                ref="delete"
                                bsStyle="danger"
                                disabled={!showEditCustomer}
                                onClick={()=>askDeleteConfirmation(true)}
                            >
                                <i className="icon-close"/> Delete
                            </Button>
                        </OverlayTrigger>
                        <Button
                            onClick={()=>{
                                this.exportToExcel()
                            }}
                        >
                            <i className="icon-share-alt"/> Export to excel
                        </Button>

                    </ButtonToolbar>
                    <Grid
                        ref="customerGrid"
                        dataSource={customerDataSource}
                        gridOptions={gridOptions}
                    />
                </Panel>
                {editCustomerComponent}
            </div>
        );
    }
}

export default StartPage;
