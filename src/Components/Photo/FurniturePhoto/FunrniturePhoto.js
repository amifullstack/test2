import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS
// import './Photo.css';

class FurniturePhoto extends Component {
  constructor(props) {
    super(props);
  }

  render() {   
    const { furniture } = this.props;
  
    return(  

            <div>
            <p>{furniture.name}</p>
              <Link to={`/view/${furniture.name}`}>
            <div className="slide-objects">              
              <img src={furniture.thumb} />               
            </div>            
            </Link>   
          </div>
               
    )
  }
}

export default FurniturePhoto;