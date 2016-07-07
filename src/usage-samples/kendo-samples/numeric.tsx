import * as React from 'react';
import Numeric from '../../components/kendo/numeric';
import Panel from '../../components/panel';
import {INumericProps} from '../../components/kendo/numeric';
export default (props) => {

    const options:INumericProps = {
        options: {
            format: "c",
            decimals: 3,
            change: onChange
        }
    };

    const percentage:INumericProps = {
        options: {
            format: "p0",
            min: 0,
            max: 0.1,
            step: 0.01
        }
    };

    const custom:INumericProps = {
        options: {
            format: "#.00 kg"
        }
    };

    return (
        <Panel heading="Kendo Numeric example">
            <div id="example">
                <ul id="fieldlist">
                    <li>
                        <label for="currency">Price:</label>
                        <Numeric
                            options={options}
                            min={0}
                            max={100}
                            value={10}
                        />
                    </li>
                    <li>
                        <label for="currency">Percentage:</label>
                        <Numeric
                            options={percentage}
                            value={0.05}
                        />
                    </li>
                    <li>
                        <label for="currency">Weight:</label>
                        <Numeric
                            options={custom}
                            value={5}
                        />
                    </li>
                </ul>
            </div>
        </Panel>
    );
}

const onChange = (e) => {
    console.log('Changed, value = ',e.value);
}