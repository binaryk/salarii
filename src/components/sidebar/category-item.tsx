import * as React from 'react';
import {Link} from 'react-router';
import * as access from './accessors';

export default function CategoryItem(props) {
    const {itemDefinition} = props;
    const text = access.text(itemDefinition);
    const link = access.link(itemDefinition);

    return (<li>
        <Link activeClassName="bn-link-active" to={link} title={text}>
            <span>{text}</span>
        </Link>
    </li>);
};

