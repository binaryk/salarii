import Context, {prop, toImmutable} from '../../../context';
import * as access from '../context-accessors';
import {ICustomer} from "../model";


export default function editSelectedCustomer(data: {
    customer: ICustomer,
    rowIndex: number
}) {
    const {customer, rowIndex} = data;
    const page = access.pages(Context.cursor);
    const start = access.start(page);

    start.update(value => 
        value.set(
            prop(access.customerModel),
            toImmutable(customer))
            .set(prop(access.selectedRow),
            rowIndex)
    );
}