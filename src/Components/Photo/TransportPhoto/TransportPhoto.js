import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS
// import './Photo.css';

class TransportPhoto extends Component {
  constructor(props) {
    super(props);
  }

  render() {   
    const { transport } = this.props;
  
    return(  

            <div>
            <p>{transport.name}</p>
              <Link to={`/view/${transport.name}`}>
            <div className="slide-objects">              
              <img src={transport.thumb} />               
            </div>            
            </Link>   
          </div>
               
    )
  }
}

export default TransportPhoto;