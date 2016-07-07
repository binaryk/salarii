import {Cursor, IContextAccessor} from "../../../context";

const Prop = 'Prop';
const userInfo = <IContextAccessor>function UserInfo(cursor: Cursor) {
    return cursor.get('userInfo');
};
userInfo.Prop = Prop;

export default userInfo;