import React, { Component } from 'react';

export default class weather extends Component {
    render() {
        return (
<div> {this.props.city && this.props.country && (
         <p>
            Location: {this.props.city}, {this.props.country} 
</p> )}

            {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
            {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
            {this.props.error && <p>Error: {this.props.error}</p>}
           
            
            
            </div>
        );
    }
};
 

// import React, { Component } from 'react';

// const Weather = props => (
//     <div>


//     </div>
// )