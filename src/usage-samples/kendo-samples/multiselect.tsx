import * as React from 'react';
import Multiselect from '../../components/kendo/multiselect';
import Panel from '../../components/panel';
import {IMultiselectProps} from '../../components/kendo/multiselect';
export default (props) => {

    let extraOptions: kendo.ui.MultiSelectOptions = {
        autoClose: false
    };

    const options:IMultiselectProps = {
        options: extraOptions,
        data   : [
            "Steven White",
            "Nancy King",
        ]
    };

    return (
        <Panel heading="Kendo Multiselect example">
            <Multiselect
                options={options}
                data   = {options.data}
            />
        </Panel>
    );
}

const onChange = (e) => {
    alert('Changed, value = '+e.value);
}