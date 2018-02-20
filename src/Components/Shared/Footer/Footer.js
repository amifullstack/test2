import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="footer">
        <p><i class="far fa-copyright"></i>2018 3D-Store</p>
      </div>
    )
  }

}

export default Footer;