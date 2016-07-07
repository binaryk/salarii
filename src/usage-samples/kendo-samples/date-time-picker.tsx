import * as React from 'react';
import DateTimePicker from '../../components/kendo/date-time-picker';
import DateTimePickerOptions = kendo.ui.DateTimePickerOptions;
import Panel from '../../components/panel';

export default (props) => {
    var options:DateTimePickerOptions = {
        value:new Date()
    };
    return (
        <Panel heading="Kendo DateTimePicker example">
            <DateTimePicker
                options={options}
            />
        </Panel>
    );
}