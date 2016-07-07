import * as React from 'react';
import PageContent from '../components/page-content';

import SimpleInput from '../components/form/input';
import DateInput from '../components/form/date-input';
import TimeInput from '../components/form/time';
import Radio from '../components/form/radio';
import Checkbox from '../components/form/checkbox';
import Button from '../components/form/button';

import Dropdown, {IDropdownOption} from '../components/form/dropdown';

import FieldSet from '../components/form/fieldset';
import FormGroup from '../components/form/form-group';
import Panel from '../components/panel';

import {List, fromJS} from 'immutable';

export default class Components extends React.Component<any, any> {
    render() {
        const dropdownOptions = fromJS([
            {
                text: 'Option A',
                value: 'a'
            },
            {
                text: 'Option B',
                value: 'b'
            }
        ]);

        return (
            <PageContent>
                <h1>Usage of basic components</h1>
                <Panel heading="Panel with heading">
                    <FieldSet legend="Basic form">
                        <FormGroup text="Simple input" size="3">
                            <SimpleInput/>
                        </FormGroup>
                        <FormGroup text="Date input" size="3">
                            <DateInput/>
                        </FormGroup>
                        <FormGroup text="Time input" size="3">
                            <TimeInput/>
                        </FormGroup>
                        <FormGroup text="Drowpdown input" size="3">
                            <Dropdown
                                options={dropdownOptions}
                                selected="b"
                            />
                        </FormGroup>
                        <FormGroup text="Some more input" size="3">
                            <Checkbox
                                name="some value"
                                value="some"
                                label="Select some value?"
                            />
                            <Radio
                                name="more-input"
                                value="A"
                                label="Option A"
                            />
                            <Radio
                                name="more-input"
                                value="B"
                                label="Option B"
                            />
                        </FormGroup>
                        <FormGroup text="Sample" size="3">
                            <Button 
                                text="Button" 
                                classes={['form-control']}
                            />
                        </FormGroup>
                    </FieldSet>
                </Panel>
            </PageContent>
        );
    }
}