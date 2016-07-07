import * as React from 'react';
import FileUpload from '../../components/kendo/file-upload';
import Panel from '../../components/panel';
import {IFileUploadProps} from '../../components/kendo/file-upload';
export default (props) => {

    let extraOptions: kendo.ui.UploadOptions = null;

    const options:IFileUploadProps = {
        options: extraOptions
    };

    return (
        <Panel heading="Kendo FileUpload example">
            <FileUpload
                options={options}
            />
        </Panel>
    );
}

const onChange = (e) => {
    alert('Changed, value = '+e.value);
}