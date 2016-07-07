import * as React from 'react';
import Mask from '../../components/kendo/mask';
import Panel from '../../components/panel';
import {IMaskProps} from '../../components/kendo/mask';
export default (props) => {

    const options:IMaskProps = {
        options: {
            mask: "(999) 000-0000"
        }
    };

    const options2:IMaskProps = {
        options: {
            mask: "000-00-0000"
        }
    };

    return (
        <Panel heading="Kendo Input-Mask example">
            <h5>Hi, insert number</h5>
            <div>
                <Mask
                    options={options}
                />
            </div>
            <div>
                <Mask
                    options={options2}
                />
            </div>
        </Panel>
    );
}