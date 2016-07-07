import * as React from 'react';
import {PageContent, Panel} from '../components';
import {Button} from '../components/form';
import {ajax} from 'rxjs/observable/dom/ajax';

export default class ConsumeEndpoint extends React.Component<any, any> {

    doServerRequest() {
        const source = ajax({
            url:'//localhost:8079/api/values',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'
        });
        source.subscribe((data) => {
           console.log('data', data);
        });
    }

    render () {
        return (<PageContent>
            <Panel heading="Hello...">
                <Button text="Click ME!" onClick={this.doServerRequest.bind(this)}/>
            </Panel>
            </PageContent>)
    }
}