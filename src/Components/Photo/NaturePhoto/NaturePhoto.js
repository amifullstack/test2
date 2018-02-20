import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS
// import './Photo.css';

class NaturePhoto extends Component {
  constructor(props) {
    super(props);
  }

  render() {   
    const { nature } = this.props;
  
    return(  

            <div>
            <p>{nature.name}</p>
              <Link to={`/view/${nature.name}`}>
            <div className="slide-objects">              
              <img src={nature.thumb} />               
            </div>            
            </Link>   
          </div>
               
    )
  }
}

export default NaturePhoto;