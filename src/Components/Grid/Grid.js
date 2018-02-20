import React, { Component } from 'react';
import Photo from '../Photo/Photo'
import FoodPhoto2 from '../Photo/FoodPhoto2';
var Carousel = require('nuka-carousel');
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Footer from '../Shared/Footer/Footer'
import axios from 'axios'




// css
import './Grid.css'

class Grid extends Component {
  constructor(props) {
    super(props)
  }  

  render() {  
    const test = this.props.animals.map((animals) => animals)
    console.log(test)
    const test2 = this.props.foods.map((foods) => foods)
    console.log(test2)
    return(
      <div className="main-slide">

      {/* Animals */}
        <div className="animal">
        <h1>3D Models</h1>          
          <Carousel>
            {this.props.animals.map((animal) => 
              <Photo {...this.props.animals}  animal={animal}/>           
              )}
          </Carousel>          
        </div>
        
        {/* Foods */}
        <div className="food">        
          <Carousel>
            {this.props.foods.map((food) => 
              <FoodPhoto2 {...this.props.foods}  food={food}/>           
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
              <PaginationLink href="/gridthree">
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

export default Grid;