import {Cursor, IContextAccessor} from "../../../context";
import {List} from 'immutable';

const Prop = 'items';

const items = <IContextAccessor>function items(cursor:Cursor) {
    return cursor.get(Prop) || List();
};
items.Prop = Prop;

export default items;