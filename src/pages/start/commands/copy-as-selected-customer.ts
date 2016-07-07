import Context, {prop} from '../../../context';
import * as access from '../context-accessors';

export default function copyAsSelectedCustomer() {
    const page = access.pages(Context.cursor);
    const start = access.start(page);
    const selectedCustomer = access.customerModel(start);

    const copyAsCustomer = selectedCustomer.set(prop(access.customerId), 0);

    start.update(v =>
        v.set(prop(access.selectedRow), -1)
            .set(prop(access.customerModel),
                copyAsCustomer
            )
    );
}