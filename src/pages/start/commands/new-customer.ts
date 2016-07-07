import Context, {prop, toImmutable} from '../../../context';
import * as access from '../context-accessors'

export default function newCustomer() {
    const pages = access.pages(Context.cursor);
    const start = access.start(pages);

    start.update(v => v.set(prop(access.customerModel),
        toImmutable({
            customerId: 0,
            contactName: '',
            contactTitle: '',
            country: '',
            company: ''
        }))
        .set(prop(access.selectedRow), -1)
    );

}