import Context, {prop, apiCallTo} from '../../../context';
import {ajax} from 'rxjs/observable/dom/ajax';
import * as access from '../context-accessors';

import {DataChangedSubject} from '../notifications';
import {AjaxResponse} from "rxjs/Rx";

export default function deleteSelectedCustomer() {
    const page = access.pages(Context.cursor);
    const start = access.start(page);
    const selectedCustomer = access.customerModel(start);
    const customerId = access.customerId(selectedCustomer);

    ajax.delete(apiCallTo(`kendo/${customerId}`))
        .subscribe((response:AjaxResponse) => {
            start.update(v =>
               v.set(prop(access.selectedRow), -1)
                .set(prop(access.customerModel),
                    null)
                .set(prop(access.confirmDelete),
                    false)
            );
            
            DataChangedSubject.next(customerId);
        });

}