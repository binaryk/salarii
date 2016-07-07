import * as React from 'react';

import {Cursor, mapValidationSetFromJoi} from '../../context';
import Dropdown from '../../components/kendo/dropdown';

import {Map} from 'immutable';

import Panel from '../../components/panel';
import {
    Button,
    ButtonToolbar,
    Col,
    Form,
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap';

import * as access from './context-accessors';
import {
    saveCustomer,
    cancelEditSelectedCustomer,
    refreshSelectedCustomer,
    copyAsSelectedCustomer
} from './commands';

import {prop} from '../../context';

import * as Joi from 'joi';

interface IEditCustomer {
    customer:Cursor;
    countries:kendo.ui.DropDownListOptions;
    companies:kendo.ui.DropDownListOptions;
}

export default class EditCustomer extends React.Component<IEditCustomer, any> {
    validationSchema: Joi.AnySchema<any>;
    validation: any;

    constructor() {
        super();

        this.validationSchema = Joi.object({
            contactName: Joi.string().min(2).required().label('Customer Name'),
            customerId: Joi.any(),
            contactTitle: Joi.any(),
            company: Joi.any(),
            country: Joi.any()
        });

        this.validation = Map<string, Object>()
    }

    onChange(propertyPath:string|Array<string>) {
        return (ev) => {
            // console.log('changing value', propertyPath, ev.target.value);
            const value = ev.target.value;

            const customer = this.props.customer.update(propertyPath, _ => value);
            const customerValue = customer.toJS();
            const validationResult = Joi.validate(customerValue, this.validationSchema, {
                abortEarly: false
            });

            this.validation = mapValidationSetFromJoi(validationResult);
        }
    };

    render() {
        const {
            companies,
            countries,
            customer
        } = this.props;

        const {validation} = this;
        const contactName = access.contactName(customer);
        const contactNameIsEmpty = contactName === null || contactName === '';

        const errorsLabel = validation.valueSeq().flatten(1).map((value, index)=>
            (<li key={index}>{value.get('message')}</li>));

        const errorsDisplay = <ul className="has-error">
            {errorsLabel}
        </ul>;

        const saveButton = (
            <Button
                bsStyle="primary"
                onClick={()=>saveCustomer()}
                disabled={contactNameIsEmpty || validation.size !== 0}
            >
                <i className="icon-docs"/> Save
            </Button>
        );

        let refreshButton = (
            <Button
                bsStyle="info"
                onClick={()=>refreshSelectedCustomer()}
            >
                <i className="icon-refresh"/> Refresh
            </Button>
        );

        let copyAsButton = (
            <Button
                onClick={()=>copyAsSelectedCustomer()}
            >
                <i className="icon-share-alt"/> Copy As
            </Button>
        );

        const cancelButton = (
            <Button onClick={()=>cancelEditSelectedCustomer()}>
                <i className="icon-action-undo"/> Cancel
            </Button>
        );

        const customerExists = access.customerId(customer) !== 0;

        if (!customerExists) {
            copyAsButton = null;
            refreshButton = null;
        }

        return (
            <Panel heading="Edit">
                {errorsDisplay}
                <Form>
                    <ButtonToolbar>
                        {saveButton}
                        {refreshButton}
                        {copyAsButton}
                        {cancelButton}
                    </ButtonToolbar>
                    <Col xs={12} md={3}>
                        <FormGroup>
                            <ControlLabel>Contact Name</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder=""
                                value={access.contactName(customer)}
                                onChange={this.onChange(prop(access.contactName))}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={3}>
                        <FormGroup>
                            <ControlLabel>Contact Title</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder=""
                                value={access.contactTitle(customer)}
                                onChange={this.onChange(prop(access.contactTitle))}
                            />
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={3}>
                        <FormGroup>
                            <ControlLabel>Company Name</ControlLabel>
                            <div>
                                <Dropdown
                                    options={companies}
                                    selected={access.company(customer)}
                                    onChange={this.onChange(prop(access.company))}
                                />
                            </div>
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={3}>
                        <FormGroup>
                            <ControlLabel>Country</ControlLabel>
                            <div>
                                <Dropdown
                                    options={countries}
                                    selected={access.country(customer)}
                                    onChange={this.onChange(prop(access.country))}
                                />
                            </div>
                        </FormGroup>
                    </Col>

                </Form>
            </Panel>
        );
    }
}