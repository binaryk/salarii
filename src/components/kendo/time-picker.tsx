import * as React from 'react';
import * as $ from 'jquery';

interface ITimePickerProps {
    options: kendo.ui.TimePickerOptions
}

export default class TimePicker extends React.Component<ITimePickerProps, any> {
    componentDidMount() {
        const {node} = this.refs;
        const {options} = this.props;

        $(node).kendoTimePicker(
            options
        );
    }

    componentWillUnmount() {
        const {node} = this.refs;
        var dropdownList = $(node).data('kendoTimePicker')
        dropdownList.destroy();
    }

    render() {
        return (
            <input ref="node"/>
        );
    }
}