import {Cursor, IContextAccessor} from "../../../context";
const Prop = 'itemDefinitions';

const itemDefinitions = <IContextAccessor>function ItemDefinitions(cursor: Cursor) {
    return cursor.get(Prop);
};

itemDefinitions.Prop = Prop;

export default itemDefinitions;
