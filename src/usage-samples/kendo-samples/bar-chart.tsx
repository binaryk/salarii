import * as React from 'react';
import BarChart from '../../components/kendo/bar-chart';
import Panel from '../../components/panel';
import {IBarChartOptions} from '../../components/kendo/bar-chart';
export default (props) => {

    let extraOptions: any/*kendo.dataviz.ui.ChartOptions */= {
        title: {
            text: "Site Visitors Stats \n /thousands/"
        },
        legend: {
            visible: false
        },
        seriesDefaults: {
            type: "bar"
        },
        series: [{
            name: "Total Visits",
            data: [56000, 63000, 74000, 91000, 117000, 138000]
        }, {
            name: "Unique visitors",
            data: [52000, 34000, 23000, 48000, 67000, 83000]
        }],
        valueAxis: {
            max: 140000,
            line: {
                visible: false
            },
            minorGridLines: {
                visible: true
            },
            labels: {
                rotation: "auto"
            }
        },
        categoryAxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            majorGridLines: {
                visible: false
            }
        },
        tooltip: {
            visible: true,
            template: "#= series.name #: #= value #"
        }
    };

    const options:IBarChartOptions = {
        options: extraOptions
    };

    return (
        <Panel heading="Kendo BarChart example">
            <BarChart
                options={options}
            />
        </Panel>
    );
} 