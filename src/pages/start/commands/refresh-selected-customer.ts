import Context, {prop, toImmutable, apiCallTo} from '../../../context';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as access from '../context-accessors';
import mapFromServerResponse from './map-from-server-response';

export default function refreshSelectedCustomer() {
    const page = access.pages(Context.cursor);
    const start = access.start(page);
    const selectedCustomer = access.customerModel(start);
    
    ajax.post(apiCallTo('kendo/refresh'), {
       customerId: access.customerId(selectedCustomer)
    }).subscribe((data:any) => {
        const {response} = data;
        const customer = mapFromServerResponse(response);
        start.set(prop(access.customerModel),
                    toImmutable(customer));
    });
}