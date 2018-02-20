import React, { Component } from 'react';
import FurniturePhoto from '../Photo/FurniturePhoto/FunrniturePhoto';
import NaturePhoto from '../Photo/NaturePhoto/NaturePhoto';
var Carousel = require('nuka-carousel');
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Footer from '../Shared/Footer/Footer'
import axios from 'axios'




// css
import './Grid2.css'

class Grid2 extends Component {
  constructor(props) {
    super(props)
  }  

  render() {      
    return(
      <div className="main-slide">

      {/* Animals */}
        <div className="furniture">
        <h1>3D Models</h1>          
          <Carousel>
            {this.props.furniture.map((furniture) => 
              <FurniturePhoto {...this.props.furniture}  furniture={furniture}/>           
              )}
          </Carousel>          
        </div>
        
        {/* Nature */}
        <div className="nature">        
          <Carousel>
            {this.props.nature.map((nature) => 
              <NaturePhoto {...this.props.nature}  nature={nature}/>           
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

export default Grid2;