import * as React from 'react';
import {Link} from 'react-router';

export default function (props) {
    return (<ul className="nav nav-tabs">
        <li role="presentation">
            <Link to="/samples/kendo/grid" activeClassName="btn-green active">Grid</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/dropdown" activeClassName="btn-green active">Dropdown</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/date-time-picker" activeClassName="btn-green active">DateTimePicker</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/time-picker" activeClassName="btn-green active">TimePicker</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/date-picker" activeClassName="btn-green active">DatePicker</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/validation" activeClassName="btn-green active">Validation</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/editor" activeClassName="btn-green active">Editor</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/autocomplete" activeClassName="btn-green active">Autocomplete</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/slider" activeClassName="btn-green active">Slider</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/mask" activeClassName="btn-green active">Input Mask</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/switch" activeClassName="btn-green active">Switch</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/treelist" activeClassName="btn-green active">Treelist</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/area-chart" activeClassName="btn-green active">AreaChart</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/line-chart" activeClassName="btn-green active">LineChart</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/pie-chart" activeClassName="btn-green active">PieChart</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/bar-chart" activeClassName="btn-green active">BarChart</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/multiselect" activeClassName="btn-green active">Multiselect</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/file-upload" activeClassName="btn-green active">FileUpload</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/color-picker" activeClassName="btn-green active">ColorPicker</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/numeric" activeClassName="btn-green active">Numeric</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/list-view" activeClassName="btn-green active">ListView</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/spreadsheet" activeClassName="btn-green active">Spreadsheet</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/window" activeClassName="btn-green active">Window</Link>
        </li>
        <li role="presentation">
            <Link to="/samples/kendo/notification" activeClassName="btn-green active">Notification</Link>
        </li>
    </ul>);
}
