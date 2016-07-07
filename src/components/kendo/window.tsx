import * as React from 'react';
import * as $ from 'jquery';
import CSSProperties = __React.CSSProperties;

export interface IWindowProps {
    options: kendo.ui.WindowOptions;
    content?:any;
    isOpened?:boolean;
}

export default class Window extends React.Component<IWindowProps, any> {

    componentDidMount() {
        const {node} = this.refs;
        const {options} = this.props;
        const {isOpened} = this.props
        $(node).kendoWindow(options['options']);

        if (isOpened) {
            this.open();
        }
    }

    componentWillUpdate(props) {
       console.log('update darling', arguments);
        const {isOpened} = props;
        if (isOpened) {
            this.open();
        }
    }

    open(){
        const {node} = this.refs;
        $(node).data("kendoWindow").open()
    }

    render() {
        const {content} = this.props;
        return (
            <div ref="node"
                 dangerouslySetInnerHTML={{__html:content}}/>
        );
    }
}