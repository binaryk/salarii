import * as React from 'react';
import * as $ from 'jquery';

export interface INotificationProps {
    options: kendo.ui.NotificationOptions;
    content?: any;
    type   ?: string;//error, info, warning
    show   ?: any;
}

export default class Notification extends React.Component<INotificationProps, any> {
    componentDidMount() {
        const {show} = this.props;
        if(show){
            this.show();
        }
    }

    componentWillUpdate(nextProps, nestState){
        const {show} = nextProps;
        if(show){
            this.show();
        }else{
            this.hide();
        }
    }

    show(){
        const {options, content, type} = this.props;
        const {node} = this.refs;
        $(node).kendoNotification(options['options']).data("kendoNotification").show(content, type || "info");
    }

    hide(){
        const {node} = this.refs;
        $(node).kendoNotification().data("kendoNotification").hide();
    }

    render() {
        return (
            <span ref="node"></span>
        );
    }
}