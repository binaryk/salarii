import {Cursor, IContextAccessor} from "../../../context";

const Prop = 'active';
const active = <IContextAccessor>function active(cursor: Cursor) {
    return cursor.get(Prop) || false;
};

active.Prop = Prop;
export default active;
