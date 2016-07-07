import {Cursor} from "immutable/contrib/cursor";
import * as React from 'react';
import Category from './category';

import SharedContext, {prop} from '../../context';
import * as access from './accessors';

interface ISidebarNavState {
    categories:Cursor,
    categoryDefinitions:Cursor,
    itemDefinitions:Cursor,
    sidebar:Cursor
}

export default class SidebarNav extends React.Component<any, ISidebarNavState> {
    constructor() {
        super();
    }

    update(data) {
        this.setState(data);
    }

    componentWillMount() {
        SharedContext.subscribe((cursor) => {
            const sidebarCursor = access.sidebar(cursor);
            if (!sidebarCursor) {
                return;
            }
            this.update(
                {
                    categories: access.categories(sidebarCursor),
                    categoryDefinitions: access.categoryDefinitions(sidebarCursor),
                    itemDefinitions: access.itemDefinitions(sidebarCursor),
                    sidebar: access.sidebar(sidebarCursor)
                });
        });
    }

    toggle(category){
        category.update('active', value => !category.get('active'))
    }

    render() {
        if (!this.state) {
            return null;
        }
        const {
            categories: sidebarCategories,
            categoryDefinitions,
            itemDefinitions
        } = this.state;

        const categoryComponents = sidebarCategories.map(
            category => {
                return (<Category
                    key={category}
                    categoryDefinition={categoryDefinitions.get(category)}
                    itemDefinitions={itemDefinitions}
                    clickHandle = {this.toggle.bind(this,categoryDefinitions.get(category))}
                />);
            });

        return (
            <ul className="nav">
                {categoryComponents}
            </ul>
        )
    }
}
