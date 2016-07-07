import * as React from 'react';

import {Panel, PageContent} from '../../components';
import {Button, FieldSet, FormGroup, Input} from '../../components/form';
import {DateTimePicker, Dropdown} from '../../components/kendo';

export default class Validation extends React.Component<any, any> {
    constructor(){
        super();
    }

    validate() {
        const {RegistrationForm} = this.refs;
        console.log('validate', RegistrationForm);
        const validator = $(RegistrationForm).kendoValidator().data('kendoValidator');

        console.log('validate says', validator.validate());
    }

    render() {
        var data:any = [
            {text: "The Shawshank Redemption", value:"1"},
            {text: "The Godfather", value:"2"},
            {text: "The Godfather: Part II", value:"3"},
            {text: "Il buono, il brutto, il cattivo.", value:"4"},
            {text: "Pulp Fiction", value:"5"},
            {text: "12 Angry Men", value:"6"},
            {text: "Schindler's List", value:"7"},
            {text: "One Flew Over the Cuckoo's Nest", value:"8"},
            {text: "Inception", value:"9"},
            {text: "The Dark Knight", value:"10"}
        ];

        var dropdownOptions:kendo.ui.DropDownListOptions = {
            dataTextField: "text",
            dataValueField: "value",
            dataSource: data,
            optionLabel: "--Choose movie--"
        };

        var dateTimeOptions:kendo.ui.DateTimePickerOptions = {
            value:new Date()
        };
        return (
            <PageContent>
                <Panel heading="Validation">
                    <form ref="RegistrationForm">

                        <FieldSet legend="Tickets form">
                            <FormGroup text="Your name" size="12">
                                <Input
                                    name="fullname"
                                    required
                                    data-message="Enter {0}"
                                />
                            </FormGroup>
                            <FormGroup text="Birthday" size="3">
                                <DateTimePicker
                                    options={dateTimeOptions}/>
                            </FormGroup>
                            <FormGroup text="Favorite Movie" size="3">
                                <Dropdown options={dropdownOptions}
                                          name="favorite-movie"
                                          selected={null}
                                          required data-message="Favorite movie is required"
                                />
                                <span class="k-invalid-msg" data-for="favorite-movie"></span>
                            </FormGroup>
                        </FieldSet>
                        <Button text="Register" onClick={()=>this.validate()}/>
                    </form>
                </Panel>
            </PageContent>
        );
    }
}