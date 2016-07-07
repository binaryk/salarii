import * as React from 'react';
import * as classNames from 'classnames';

import * as access from './accessors';
import {Link} from 'react-router';
import CategoryItem from './category-item';

export default function Category (props) {
    const {
        categoryDefinition,
        itemDefinitions,
        clickHandle
    } = props;

    const text = access.text(categoryDefinition);
    const categoryDefinitionItems = access.items(categoryDefinition);
    const icon = access.icon(categoryDefinition) || 'notebook';
    const link = access.link(categoryDefinition) || '';
    const active = access.active(categoryDefinition);

    const categoryItemComponents = categoryDefinitionItems.map(
        categoryItem => (<CategoryItem
            key={categoryItem}
            itemDefinition={itemDefinitions.get(categoryItem)}
        />)
    );

    let ulClass = classNames({
        'nav sidebar-subnav collapse': true,
        'in': active
    });

    let liClass = classNames({
        'collapsed': ! active
    });
    return <li className={liClass}>
        <Link to={link} title={text} onClick={clickHandle}>
            <em className={`icon-${icon}`}></em>
            <span>{text}</span>
        </Link>
        <ul className={ulClass}>
            {categoryItemComponents}
        </ul>
    </li>
};