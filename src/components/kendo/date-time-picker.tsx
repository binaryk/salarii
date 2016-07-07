import * as React from 'react';
import * as $ from 'jquery';
interface IDateTimePickerProps {
    options: kendo.ui.DateTimePickerOptions
}

export default class Dropdown extends React.Component<IDateTimePickerProps, any> {
    componentDidMount() {
        const {dateTimePicker} = this.refs;
        const {options} = this.props;

        $(dateTimePicker).kendoDateTimePicker(
            options
        );
    }

    componentWillUnmount() {
        const {dateTimePicker} = this.refs;
        var dropdownList = $(dateTimePicker).data('kendoDateTimePicker')
        dropdownList.destroy();
    }

    render() {
        return (
            <input ref="dateTimePicker"/>
        );
    }
}