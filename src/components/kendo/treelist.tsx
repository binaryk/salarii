import * as React from 'react';
import * as $ from 'jquery';
import TreeListOptions = kendo.ui.TreeListOptions;

interface ITreelistProps {
    treeListOptions: TreeListOptions
}

export default class Treelist extends React.Component<ITreelistProps, any> {
    componentDidMount() {
        const {node} = this.refs;
        const {treeListOptions} = this.props;
        $(node).kendoTreeList(
            treeListOptions
        );
    }

    componentWillUnmount() {
        const {node} = this.refs;
        var treelist = $(node).data('kendoTreeList')
        treelist.destroy();
    }

    render() {
        return (
            <div ref="node"/>
        );
    }
}