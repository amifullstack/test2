import React, { Component } from 'react';
import TechnologyPhoto from '../Photo/TechnologyPhoto/TechnologyPhoto';
import TransportPhoto from '../Photo/TransportPhoto/TransportPhoto';
var Carousel = require('nuka-carousel');
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Footer from '../Shared/Footer/Footer'
import axios from 'axios'




// css
import './Grid3.css'

class Grid3 extends Component {
  constructor(props) {
    super(props)
  }  

  render() {      
    return(
      <div className="main-slide">

      {/* Animals */}
        <div className="technology">
        <h1>3D Models</h1>          
          <Carousel>
            {this.props.technology.map((technology) => 
              <TechnologyPhoto {...this.props.technology}  technology={technology}/>           
              )}
          </Carousel>          
        </div>
        
        {/* Transport */}
        <div className="transport">        
          <Carousel>
            {this.props.transport.map((transport) => 
              <TransportPhoto {...this.props.transport}  transport={transport}/>           
              )}
          </Carousel>          
        </div>
        
        
          <div className="pagination">
          <Pagination>
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="/gridtwo">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="gridthree">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>

          {/* <Footer/> */}
          </div>
          <Footer/>          
      </div>
        
    )
  }
}

export default Grid3;