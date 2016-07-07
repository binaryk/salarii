import * as React from 'react';
import ColorPicker from '../../components/kendo/color-picker';
import Panel from '../../components/panel';
import {IColorPickerProps} from '../../components/kendo/color-picker';
export default (props) => {

    let extraOptions: kendo.ui.ColorPickerOptions = {
        value: "#ffffff",
        buttons: false,
        select: onChange
    };

    const options:IColorPickerProps = {
        options: extraOptions
    };

    return (
        <Panel heading="Kendo ColorPicker example">
            <div>
                <ColorPicker
                    options={options}
                />
            </div>
            <div id="result">
                <p>
                    This is the result
                </p>
            </div>
        </Panel>
    );
}

const onChange = (e) => {
    $('#result').css('background-color',e.value);
    console.log('Changed, value = ',e.value);
}