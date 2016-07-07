import * as React from 'react';

const PageContent = (props) => (
    <section>
        <div className="content-wrapper">
            {props.children}
        </div>
    </section>
);

export default PageContent;

