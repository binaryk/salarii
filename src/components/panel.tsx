import * as React from 'react';

interface PanelProps {
    heading: string;
    children?: any;
}
export default (props: PanelProps) => {
    const {children, heading} = props;
    const panelHeading = (<div className='panel-heading'>{heading}</div>);
    return (
        <div className='panel panel-default'>
            {panelHeading}
            <div className='panel-body'>
                {children}
            </div>
        </div>
    );
}