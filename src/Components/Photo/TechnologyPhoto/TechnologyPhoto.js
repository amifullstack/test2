import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS
// import './Photo.css';

class TechnologyPhoto extends Component {
  constructor(props) {
    super(props);
  }

  render() {   
    const { technology } = this.props;
  
    return(  

            <div>
            <p>{technology.name}</p>
              <Link to={`/view/${technology.name}`}>
            <div className="slide-objects">              
              <img src={technology.thumb} />               
            </div>            
            </Link>   
          </div>
               
    )
  }
}

export default TechnologyPhoto;