import * as React from 'react';
import PageContent from '../components/page-content';
import Panel from '../components/panel';
import { History } from 'react-router';

import KendoTabs from './kendo-samples/kendo-tabs';

export default class KendoSamples extends React.Component<any, any> {
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillMount() {
        console.log('will unmount');
    }

    componentWillUnmount() {
        console.log('will unmount');
    }



    render() {
        const {children} = this.props;
        return (
            <PageContent>
                <KendoTabs/>
                <h1>Kendo usages</h1>
                {children}
            </PageContent>
        )
    }
}