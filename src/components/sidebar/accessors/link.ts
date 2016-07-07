import {Cursor, IContextAccessor} from "../../../context";

const Prop = 'link';
const link = <IContextAccessor>function link(cursor: Cursor) {
    return cursor.get(Prop);
};

link.Prop = Prop;

export default link;