import * as React from 'react';
import Switch from '../../components/kendo/switch';
import Panel from '../../components/panel';
import {ISwitchProps} from '../../components/kendo/switch';

export default class KendoSwitch extends React.Component<any, any>{

    constructor(){
        super();
        this.state = {
            value: false,
        };
    }


    onChange(e){
        this.setState({
            value: e.checked
        });
        console.log(e.checked);
    }

    render(){
        const options:ISwitchProps = {
            options: {
                onLabel: "YES",
                offLabel: "NO",
                change : this.onChange.bind(this)
            }
        };

        const state = this.state;
        const switchState = state.value ? "on" : "off";

        return (
            <Panel heading="Kendo Mobile Switch example">
                <div>
                    <Switch
                        options={options}
                        label="Send notifications"
                    />
                    <p>
                        {switchState}
                    </p>
                </div>
            </Panel>
        );
    }
}
/*

const onChange = (e) => {
    alert('Changed, value = '+e.checked);
}*/
