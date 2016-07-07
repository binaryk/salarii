import * as React from 'react';
import * as $ from 'jquery';

import {InputProps} from "../form/input";
import CSSProperties = __React.CSSProperties;

export interface IEditorProps extends InputProps {
    options: kendo.ui.EditorOptions;
    rows? : number;
    cols? : number;

}

export default class Editor extends React.Component<IEditorProps, any> {
    componentDidMount() {
        const {editor} = this.refs;
        const {options} = this.props;
        $(editor).kendoEditor(options['options']);
    }

    componentWillUnmount() { 
    }

    onChange() {
        const {editor} = this.refs;

    }

    render() {
        const props = this.props;
        return (
            <div>
                <textarea ref="editor" value={this.props.value} onChange={this.onChange.bind(this)}>
                </textarea>
            </div>
        );
    }
}