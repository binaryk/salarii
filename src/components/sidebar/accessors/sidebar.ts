import {Cursor, IContextAccessor} from "../../../context";

const Prop = 'sidebar';
const sidebar = <IContextAccessor>function Sidebar(cursor) {
    return cursor.get(Prop);
}
sidebar.Prop = Prop;

export default sidebar;