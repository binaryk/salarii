import * as React from 'react';
import PieChart from '../../components/kendo/pie-chart';
import Panel from '../../components/panel';
import {IPieChartOptions} from '../../components/kendo/pie-chart';
export default (props) => {

    let extraOptions: any/*kendo.dataviz.ui.ChartOptions */= {
        title: {
            position: "bottom",
            text: "Share of Internet Population Growth, 2007 - 2012"
        },
        legend: {
            visible: false
        },
        chartArea: {
            background: ""
        },
        seriesDefaults: {
            labels: {
                visible: true,
                background: "transparent",
                template: "#= category #: \n #= value#%"
            }
        },
        series: [{
            type: "pie",
            startAngle: 150,
            data: [{
                category: "Asia",
                value: 53.8,
                color: "#9de219"
            },{
                category: "Europe",
                value: 16.1,
                color: "#90cc38"
            },{
                category: "Latin America",
                value: 11.3,
                color: "#068c35"
            },{
                category: "Africa",
                value: 9.6,
                color: "#006634"
            },{
                category: "Middle East",
                value: 5.2,
                color: "#004d38"
            },{
                category: "North America",
                value: 3.6,
                color: "#033939"
            }]
        }],
        tooltip: {
            visible: true,
            format: "{0}%"
        }
    };

    const options:IPieChartOptions = {
        options: extraOptions
    };

    return (
        <Panel heading="Kendo PieChart example">
            <PieChart
                options={options}
            />
        </Panel>
    );
} 