import React from 'react';
import ReactTooltip from 'react-tooltip';

class Tooltip extends React.Component {

    render () {
        const {position} = this.props;
        
        return (
        <div className="tooltip-component">
            <div className='hover' data-tip data-for="hover-over">Hover over me!</div>

            <ReactTooltip id='hover-over' place={position} effect='solid'>
                Thanks for hovering! I'm a <br /> <div className='middle-text'>Tooltip</div>
            </ReactTooltip>
        </div>
        );
    }
}

export default Tooltip;
