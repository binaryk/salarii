import * as React from 'react';
import Editor from '../../components/kendo/editor';
import Panel from '../../components/panel';
import {IEditorProps} from '../../components/kendo/editor';
import EditorOptions = kendo.ui.EditorOptions;

export default (props) => {
    let editorOptions: kendo.ui.EditorOptions = { resizable: {
        content: true,
        toolbar: true
    }};
    const options:IEditorProps = {
        options: editorOptions,
        rows : 10,
        cols : 30
    };

    
    return (
        <Panel heading="Kendo Editor example">
            <Editor
                options={options}
                value="<b> Default bold string ...</b>"
            />
        </Panel>
    );
}