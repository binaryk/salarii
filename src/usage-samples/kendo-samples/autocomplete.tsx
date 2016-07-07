import * as React from 'react';
import Autocomplete from '../../components/kendo/autocomplete';
import Panel from '../../components/panel';
import {IAutocompleteProps} from '../../components/kendo/autocomplete';
export default (props) => {
    const data = [
        "Albania",
        "Andorra",
        "Armenia",
        "Austria",
        "Azerbaijan",
        "Belarus",
        "Belgium",
        "Bosnia & Herzegovina",
        "Bulgaria",
        "Croatia",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Estonia",
        "Finland",
        "France",
        "Georgia",
        "Germany",
        "Greece",
        "Hungary",
        "Iceland",
        "Ireland",
        "Italy",
        "Kosovo",
        "Latvia",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macedonia",
        "Malta",
        "Moldova",
        "Monaco",
        "Montenegro",
        "Netherlands",
        "Norway",
        "Poland",
        "Portugal",
        "Romania",
        "Russia",
        "San Marino",
        "Serbia",
        "Slovakia",
        "Slovenia",
        "Spain",
        "Sweden",
        "Switzerland",
        "Turkey",
        "Ukraine",
        "United Kingdom",
        "Vatican City"
    ];
    let extraOptions: kendo.ui.AutoCompleteOptions = {
        dataSource: data,
        filter: "startswith",
        placeholder: "Select country...",
        separator: ", ",
        change : onChange
    };
    const options:IAutocompleteProps = {
        options: extraOptions
    };

    return (
        <Panel heading="Kendo Autocomplete example">
            <Autocomplete
                options={options}
            />
        </Panel>
    );
}

const onChange = (e) => {
    console.log('Changed, value = ',e.sender._prev);
}