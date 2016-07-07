import * as React from 'react';
import * as $ from 'jquery';

import {InputProps} from "../form/input";
import CSSProperties = __React.CSSProperties;

export interface IFileUploadProps extends InputProps {
    options: kendo.ui.UploadOptions;
}

export default class FileUpload extends React.Component<IFileUploadProps, any> {
    componentDidMount() {
        const {node} = this.refs;
        const {options} = this.props;
        $(node).kendoUpload(options['options']);
    }

    render() {
        return (
            <div>
                <input ref="node" type="file" />
            </div>
        );
    }
}