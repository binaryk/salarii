import * as React from 'react';
import SidebarNav from './sidebar-nav';

export default class Sidebar extends React.Component<any,any> {
    render() {
        return (
            <aside>
                    <nav className="navbar">
                        <SidebarNav/>
                    </nav>
            </aside>
        )
    }
}