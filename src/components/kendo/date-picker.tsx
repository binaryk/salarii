import * as React from 'react';
import * as $ from 'jquery';

interface IDatePickerProps {
    options: kendo.ui.DatePickerOptions
}

export default class DatePicker extends React.Component<IDatePickerProps, any> {
    componentDidMount() {
        const {node} = this.refs;
        const {options} = this.props;

        $(node).kendoDatePicker(
            options
        );
    }

    componentWillUnmount() {
        const {node} = this.refs;
        var dropdownList = $(node).data('kendoDatePicker')
        dropdownList.destroy();
    }

    render() {
        return (
            <input ref="node"/>
        );
    }
}