import Grid from './page';
import Context, {toImmutable, prop} from '../../context';
import * as access from './context-accessors';

(function bootstrap(){
    Context.cursor.set(prop(access.pages), toImmutable({
            start: {
                customerModel: null,
                selectedRow: -1
            }
    }));
})();

export default Grid;