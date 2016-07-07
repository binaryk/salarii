import * as React from 'react';
import Slider from '../../components/kendo/slider';
import Panel from '../../components/panel';
import {ISliderProps} from '../../components/kendo/slider';
export default (props) => {

    let extraOptions: kendo.ui.SliderOptions = {
        orientation: "vertical",
        min: -20,
        max: 20,
        smallStep: 1,
        largeStep: 20,
        showButtons: true,
        change : onChange
    };

    const options:ISliderProps = {
        options: extraOptions
    };

    return (
        <Panel heading="Kendo Slider example">
            <Slider
                options={options}
            />
        </Panel>
    );
}

const onChange = (e) => {
    alert('Changed, value = '+e.value);
}