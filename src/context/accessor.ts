import {Cursor} from 'immutable/contrib/cursor';

export interface IContextAccessor {
    (cursor: Cursor): any;
    Prop: string;
}

export function accessorFactory(prop: string) {
    const accessor = <IContextAccessor>function accessor(cursor: Cursor) {
        return cursor.get(prop);
    };
    accessor.Prop = prop;

    return accessor;
}
