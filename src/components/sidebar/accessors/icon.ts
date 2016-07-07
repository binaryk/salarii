import {Cursor, IContextAccessor} from "../../../context";
const Prop = 'icon';
const icon = <IContextAccessor>function icon(cursor: Cursor) {
    return cursor.get(Prop);
};
icon.Prop = Prop;

export default icon;