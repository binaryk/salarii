import {IContextAccessor} from "../../../context";

const Prop = 'categories';
const categories = <IContextAccessor>function categories(cursor) {
    return cursor.get(Prop);
};

categories.Prop = Prop;

export default categories;
