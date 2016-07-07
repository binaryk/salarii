import {BehaviorSubject, Subscription} from 'rxjs';
import * as React from 'react';
import PageContent from '../../components/page-content';
import Panel from '../../components/panel';

import {
    DateInput,
    Dropdown,
    FieldSet,
    FormGroup,
    Input,
    TimeInput
} from "../../components/form";

import {fromJS, Map, List} from 'immutable';
import {from as buildCursorFrom, Cursor} from 'immutable/contrib/cursor';
import * as Joi from 'joi';
import {AnySchema} from 'joi';

const initialState = {
    simpleInput: '',
    dateInput: '',
    timeInput: '',
    dropdown: 'b',
    dropdownOptions: [
        {
            text: 'Option A',
            value: 'a'
        },
        {
            text: 'Option B',
            value: 'b'
        }
    ]
};
const PageContextObserver = new BehaviorSubject(
    buildCursorFrom(
        fromJS(
            initialState
        ), doUpdate
    )
);

function doUpdate(next, prev) {
    console.log('on update', next.toJS(), prev.toJS());

    PageContextObserver.next(
        buildCursorFrom(next, doUpdate)
    );
}

interface ValidationPageState {
    model:Cursor;
    validation: Map<string, Object>
}
export default class Validation extends React.Component<any, ValidationPageState> {
    modelObserver:Subscription;
    validationSchema: AnySchema<any>;

    constructor() {
        super();
        this.validationSchema = Joi.object({
            simpleInput: Joi.string().min(3).required().label('Simple input'),
            dateInput: Joi.date().label('Date input'),
            timeInput: Joi.date().format('H:m').required().label('Time input'),
            dropdown: Joi.string().required().label('Dropdown input'),
            dropdownOptions: Joi.any().allow(true)
        });
    }

    componentWillMount() {
        this.modelObserver = PageContextObserver.subscribe((value:Cursor) => {

            let validation = Map<string, Object>();
            const formValue = value.toJS();

            const validationResult = Joi.validate(formValue, this.validationSchema, {
                abortEarly: false
            });

            if (validationResult.error) {
                const {details} = validationResult.error;
                details.map(item => {
                    console.log(item);
                    var listOfIssues = validation.get(item.path) as List<string> || List<string>();
                    listOfIssues = listOfIssues.push(fromJS(item));

                    validation = validation.set(item.path, listOfIssues);
                });
            }

            this.setState({
                model: value,
                validation
            });
        });
    }

    componentWillUnmount() {
        this.modelObserver.unsubscribe();
    }

    onChange(propertyPath:string|Array<string>) {
        return (ev) => {
            const {model} = this.state;
            console.log('changing value', propertyPath, ev.target.value);
            const value = ev.target.value;

            model.update(propertyPath, _ => value);
        }
    }

    render() {
        const {model, validation} = this.state;
        const dropdownValue = model.get('dropdown');
        const dropdownOptions = model.get('dropdownOptions');
        const hasValidationErrors = !validation.isEmpty();


        const errorsLabel = validation.valueSeq().flatten(1).map((value, index)=>
            (<li key={index}>{value.get('message')}</li>));

        return (
            <PageContent>
                <Panel heading="Hey validation">
                    <ul className="has-error">
                        {errorsLabel}
                    </ul>
                    <FieldSet legend="Basic form">
                        <FormGroup text="Simple input" size="3">
                            <Input
                                onChange={this.onChange('simpleInput')}
                            />
                        </FormGroup>
                        <FormGroup text="Date input" size="3">
                            <DateInput
                                onChange={this.onChange('dateInput')}
                            />
                        </FormGroup>
                        <FormGroup text="Time input" size="3">
                            <TimeInput
                                onChange={this.onChange('timeInput')}
                            />
                        </FormGroup>
                        <FormGroup text="Drowpdown input" size="3">
                            <Dropdown
                                options={dropdownOptions}
                                selected={dropdownValue}
                                onChange={this.onChange('dropdown')}
                            />
                        </FormGroup>
                    </FieldSet>
                </Panel>
            </PageContent>
        );
    }
}