import Context, {apiCallTo} from '../../../context';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as access from '../context-accessors';

import mapToServerRequest from './map-to-server-request'
import mapFromServerResponse from './map-from-server-response';
import editSelectedCustomer from './edit-selected-customer';


import {DataChangedSubject} from '../notifications';
import {AjaxResponse} from "rxjs/Rx";

export default function saveCustomer() {
    const page = access.pages(Context.cursor);
    const start = access.start(page);
    const selectedCustomer = access.customerModel(start);
    ajax.post(apiCallTo('kendo/save'),
        mapToServerRequest(selectedCustomer.toJS()), {
            'Content-Type': 'application/json'
        }).subscribe((value:AjaxResponse) => {
        const {response} = value;
        const customer = mapFromServerResponse(response);
        const rowIndex = -1;

        editSelectedCustomer({customer, rowIndex})

        DataChangedSubject.next(customer);
    });
}