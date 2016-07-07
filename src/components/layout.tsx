import * as React from 'react';
import Footer from './footer';
import Header from './header';
import Sidebar from './sidebar/sidebar-layout';
import Main from './main';
import * as classnames from 'classnames';

export default class Template extends React.Component<any,any> {
    render() {
        const {children} = this.props;

        return (
            <div className="wrapper">
                <Header/>
                <Main>{children}</Main>
                <Sidebar/>
                <Footer/>
            </div>
        )
    }
}