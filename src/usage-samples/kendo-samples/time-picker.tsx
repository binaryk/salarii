import * as React from 'react';
import TimePicker from '../../components/kendo/time-picker';
import TimePickerOptions = kendo.ui.TimePickerOptions;
import Panel from '../../components/panel';

export default (props) => {
    var options:TimePickerOptions = null;
    
    return (
        <Panel heading="Kendo TimePicker example">
            <TimePicker
                options={options}
            />
        </Panel>
    );
}