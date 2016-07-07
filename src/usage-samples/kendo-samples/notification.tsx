import * as React from 'react';
import Notification from '../../components/kendo/notification';
import Panel from '../../components/panel';
import {INotificationProps} from '../../components/kendo/notification';

export default class KendoNotification extends React.Component<any, any>{
    constructor(){
        super();
    }

    componentWillMount(){
        this.setState({
            show: false
        });
    }

    onShow() {
        this.setState({
            show: !this.state.show
        });
    }

    onHide(){
        console.log('hide');
        this.setState({
            show: false
        });
    }

     render(){


         const content = `
            <p>Continutul este stabilit in parinte</p> 
         `;
         let options : INotificationProps = {
             options: {
                 hide: this.onHide.bind(this),
                 autoHideAfter: 0,
                 button: true,
                 hideOnClick: true,
                 position: {
                     pinned: true,
                     top: null,
                     left: null,
                     bottom: 20,
                     right: 20
                 }
             }
         }
         return (
             <Panel heading="Kendo Notification example">
                 <Notification 
                     options={options} 
                     content={content}
                     type   = "error"
                     show   = {this.state.show}
                 />
                 <button  className="btn btn-info" onClick={this.onShow.bind(this)}>Show notification</button>
             </Panel>
         )
     }
}