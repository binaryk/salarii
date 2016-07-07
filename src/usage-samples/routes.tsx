import * as React from 'react';
import {Route, IndexRoute} from 'react-router';

import Components from './components';

import Kendo from './kendo';
import KendoGrid from './kendo-samples/grid';
import KendoDropdown from './kendo-samples/dropdown';
import KendoDateTimePicker from './kendo-samples/date-time-picker';
import KendoValidation from './kendo-samples/validation';
import KendoEditor from './kendo-samples/editor';
import KendoAutocomplete from './kendo-samples/autocomplete';
import KendoSlider from './kendo-samples/slider';
import KendoMask from './kendo-samples/mask';
import KendoSwitch from './kendo-samples/switch';
import KendoTreelist from './kendo-samples/treelist';
import KendoAreaChart from './kendo-samples/area-chart';
import KendoMultiselect from './kendo-samples/multiselect';
import KendoFileUpload from './kendo-samples/file-upload';
import KendoColorPicker from './kendo-samples/color-picker';
import KendoNumeric from './kendo-samples/numeric';
import KendoTimePicker from './kendo-samples/time-picker';
import KendoDatePicker from './kendo-samples/date-picker';
import KendoLineChart from './kendo-samples/line-chart';
import KendoPieChart from './kendo-samples/pie-chart';
import KendoBarChart from './kendo-samples/bar-chart';
import KendoListView from './kendo-samples/listview';
import KendoSpreadsheet from './kendo-samples/spreadsheet';
import KendoWindow from './kendo-samples/window';
import KendoNotification from './kendo-samples/notification';

import ValidationPage from './validation-joi/validation-page';
import ConsumeEndpoint from './consume-endpoint';

import StartPage from '../pages/start';

export default (
    <Route path='samples'>
        <IndexRoute component={StartPage}/>
        <Route path='basic-components' component={Components}/>
        <Route path='kendo' component={Kendo}>
            <IndexRoute component={KendoGrid}/>
            <Route path="grid" component={KendoGrid}/>
            <Route path="dropdown" component={KendoDropdown}/>
            <Route path="date-time-picker" component={KendoDateTimePicker}/>
            <Route path="time-picker" component={KendoTimePicker}/>
            <Route path="date-picker" component={KendoDatePicker}/>
            <Route path="validation" component={KendoValidation}/>
            <Route path="editor" component={KendoEditor}/>
            <Route path="autocomplete" component={KendoAutocomplete}/>
            <Route path="slider" component={KendoSlider}/>
            <Route path="mask" component={KendoMask}/>
            <Route path="switch" component={KendoSwitch}/>
            <Route path="treelist" component={KendoTreelist}/>
            <Route path="area-chart" component={KendoAreaChart}/>
            <Route path="multiselect" component={KendoMultiselect}/>
            <Route path="file-upload" component={KendoFileUpload}/>
            <Route path="color-picker" component={KendoColorPicker}/>
            <Route path="numeric" component={KendoNumeric}/>
            <Route path="line-chart" component={KendoLineChart}/>
            <Route path="pie-chart" component={KendoPieChart}/>
            <Route path="bar-chart" component={KendoBarChart}/>
            <Route path="list-view" component={KendoListView}/>
            <Route path="spreadsheet" component={KendoSpreadsheet}/>
            <Route path="window" component={KendoWindow}/>
            <Route path="notification" component={KendoNotification}/>
        </Route>
        <Route path='validation' component={ValidationPage}/>
        <Route path='consume-endpoint' component={ConsumeEndpoint}/>
        <Route path='start-page' component={StartPage}/>
    </Route> 
)
