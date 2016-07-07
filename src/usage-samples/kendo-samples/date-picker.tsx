import * as React from 'react';
import DatePicker from '../../components/kendo/date-picker';
import DatePickerOptions = kendo.ui.DatePickerOptions;
import Panel from '../../components/panel';

export default (props) => {
    var options:DatePickerOptions = {
        // defines the start view
        start: "year",
        // defines when the calendar should return date
        depth: "day",
        // display month and year in the input
        format: "dd.MM.yyyy",
        change: onUpdate
    };
    
    return (
        <Panel heading="Kendo DatePicker example">
            <DatePicker
                options={options}
            />
        </Panel>
    );
}

function onUpdate () {
    var value = this.value();
    console.log(value); //value is the selected date in the datepicker
}