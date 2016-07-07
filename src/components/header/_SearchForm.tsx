import * as React from 'react';

export default class SearchForm extends React.Component<any,any>{
    render(){
        return(
            <form role="search" className="navbar-form">
                <div className="form-group has-feedback">
                    <input type="text" placeholder="Type and hit enter ..." className="form-control"/>
                        <div className="fa fa-times form-control-feedback">

                        </div>
                </div>
                <button type="submit" className="hidden btn btn-default">Submit</button>
            </form>
        )
    }
}