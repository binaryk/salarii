import {Cursor, IContextAccessor} from "../../../context";

const Prop = 'categoryDefinitions';
const categoryDefinitions = <IContextAccessor>function CategoryDefinitions(cursor:Cursor) {
    return cursor.get(Prop);
};

categoryDefinitions.Prop=Prop;

export default categoryDefinitions;
