import * as React from 'react';
import Window from '../../components/kendo/window';
import Panel from '../../components/panel';
import {IWindowProps} from '../../components/kendo/window';

export default class KendoWindow extends React.Component<any, any> {

    constructor() {
        super();
    }

    onClose() {
        this.setState({
            isOpened: false
        });
    }

    onOpenClicked() {
        this.setState({
            isOpened: !this.state.isOpened
        });
    }

    componentWillMount() {
        this.setState({
            isOpened: false
        });
    }

    render() {
        let extraOptions:kendo.ui.WindowOptions = {
            width: "600px",
            title: "About Alvar Aalto",
            visible: false,
            actions: [
                "Pin",
                "Minimize",
                "Maximize",
                "Close"
            ],
            close: this.onClose.bind(this)
        };

        const options:IWindowProps = {
            options: extraOptions
        };

        const content = `
            <p>Continutul este stabilit in parinte</p>
            <p>Source: <a href="http://www.aalto.com/about-alvar-aalto.html" title="About Alvar Aalto">www.aalto.com</a></p>
         `;

        const me = this;

        return (
            <Panel heading="Kendo Window example">
                <Window
                    options={options}
                    content={content}
                    isOpened={this.state.isOpened}
                />
                <button
                    className="btn btn-success"
                    onClick={this.onOpenClicked.bind(this)}
                >Open
                </button>
            </Panel>
        );
    }

}