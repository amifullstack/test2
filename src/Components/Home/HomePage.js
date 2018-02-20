import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Link to='/'><h1>Vegies</h1></Link>        
      </div>      
    )
  }
}

export default HomePage;