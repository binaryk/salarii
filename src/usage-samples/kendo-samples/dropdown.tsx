import * as React from 'react';
import Dropdown from '../../components/kendo/dropdown';
import DropdownOptions = kendo.ui.DropDownListOptions;
import Panel from '../../components/panel';

export default (props) => {
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

    var options:DropdownOptions = {
        dataTextField: "text",
        dataValueField: "value",
        dataSource: data
    };

    return (
        <Panel heading="Kendo Dropdown example">
            <Dropdown
                options={options}
            />
        </Panel>
    );
}