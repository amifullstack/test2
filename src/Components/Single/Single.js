import React, { Component } from 'react';
import 'aframe';

class Single extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var img;
    const {match} = this.props;
    const animals = this.props.animals;
    const foods = this.props.foods;
    const furniture = this.props.furniture;
    const nature = this.props.nature;
    const technology = this.props.technology;
    const transport = this.props.transport;
    const postId = match.params.postId;
    
    console.log(this.props)
    const i = animals.findIndex((e) => e.name === postId)
    const j = foods.findIndex((e) => e.name === postId)
    const k = furniture.findIndex((e) => e.name === postId)
    const l = nature.findIndex((e) => e.name === postId)
    const m = technology.findIndex((e) => e.name === postId)
    const n = transport.findIndex((e) => e.name === postId)

    if(i >=0) {
      console.log(i)
      console.log(animals[i].thumb)
      img=animals[i].thumb;
    } else if(j >=0 ) {
      console.log(j)
      console.log(foods[j])
      img=foods[j].thumb;
    }else if(k >=0 ) {
      console.log(k)
      console.log(furniture[k])
      img=furniture[k].thumb;
    } else if(l >= 0) {
      console.log(l)
      console.log(nature[l])
      img=nature[l].thumb;
    }else if(m >= 0){
      console.log(m)
      console.log(technology[m])
      img=technology[m].thumb;
    } else if(n >= 0){
      console.log(n)
      console.log(transport[n])
      img=transport[n].thumb;
    }
    
    
    // console.log(animal)
    return(
      <div>
        <h3>Single 3D grid: {postId}</h3>
        {/* <img src={img}/> */}
        <a-scene rotation="0 -130 0" >      
        <a-sky src={img} rotation="0 -130 0" className="test"/>
      </a-scene> 
      </div>
    )
  }
}

export default Single;