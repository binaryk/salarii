import Context, {prop} from '../../../context';
import * as access from '../context-accessors';


export default function editSelectedCustomer() {
    const page = access.pages(Context.cursor);
    const start = access.start(page);

    start.set(prop(access.customerModel),
                    null);
}