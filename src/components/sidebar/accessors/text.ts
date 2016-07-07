import {Cursor, IContextAccessor} from "../../../context";

const Prop = 'text';
const text = <IContextAccessor>function text(cursor: Cursor) {
    return cursor.get(Prop) || "";
};

text.Prop = Prop;

export default text;