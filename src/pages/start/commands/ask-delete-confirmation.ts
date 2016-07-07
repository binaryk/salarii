import Context, {prop} from '../../../context';
import * as access from '../context-accessors';


export default function askDeleteConfirmation(value: boolean) {
    const page = access.pages(Context.cursor);
    const start = access.start(page);

    start.set(prop(access.confirmDelete),
        value);
}