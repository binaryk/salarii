import * as React from 'react';
import * as $ from 'jquery';

import {InputProps} from "../form/input";

import DropDownList = kendo.ui.DropDownList;
import DropDownListChangeEvent = kendo.ui.DropDownListChangeEvent;

export interface IDropdownProps extends InputProps {
    options: kendo.ui.DropDownListOptions;
    selected?: any;
}

export default class Dropdown extends React.Component<IDropdownProps, any> {
    componentDidMount() {
        const {dropdown} = this.refs;
        const {options, selected, onChange} = this.props;
        const _this = this;

        Object.assign(options, {
            change: function (ev) {
                const {sender} = ev;
                onChange({
                    target:dropdown
                });
            }
        });

        $(dropdown).kendoDropDownList(
            options
        );

        const dropdownList = $(dropdown).data('kendoDropDownList') as DropDownList;

        dropdownList.value(selected);
    }

    componentDidUpdate(props, state) {
        const {dropdown} = this.refs;
        const {selected} = this.props;
        const dropdownList = $(dropdown).data('kendoDropDownList') as DropDownList;

        dropdownList.value(selected);
    }

    componentWillUnmount() {
        const {dropdown} = this.refs;
        var dropdownList = $(dropdown).data('kendoDropDownList')
        dropdownList.destroy();
    }

    render() {
        const props = this.props;
        return (
            <input
                ref="dropdown"
                {...props}
            />
        );
    }
}