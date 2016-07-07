import * as React from 'react';

export default class Page extends React.Component<any,any>{
    render(){
        return(
            <section>
                <div className="content-wrapper">
                    <h3>Entry page
                        <small>This is the entry page component of the application</small>
                    </h3>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Hi, look around using the menu</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}