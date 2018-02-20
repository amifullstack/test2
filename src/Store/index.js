import { combineReducers, createStore } from 'redux';
import axios from 'axios';


// RootReducer
import rootReducer from '../Reducers/indexReducer';

// Data OR API Call
import animals from '../data/animals';
import foods from '../data/foods';
import furniture from '../data/furniture';
import nature from '../data/nature';
import technology from '../data/technology';
import transport from '../data/transport';

// scapic api
// working: true

//---------------API-Call--------------
// animals, food, furniture, nature, technology, transport
// var categoriess = []
// var animals = []
    
// axios.get('http://localhost:3000/api/data')
// .then(response => {
  
//   response.data.forEach((e) => {
//     categoriess.push(e)
//   })
// })

// axios.get('http://localhost:3000/api/data/animals').then(res => {
//   res.data.models.forEach((e) => { animals.push(e)})
// })

// axios.get('http://localhost:3000/api/data/animals').then(res => {
//   animals.push(res.data)
// })
// animals.forEach((e) => console.log(e))
// ----------------------------------------------




const defaultState = {  
  animals: animals,
  foods: foods,
  furniture: furniture,
  nature: nature,
  technology: technology,
  transport: transport,  
}

const Store = createStore(rootReducer, defaultState) // passing state to reducer

export default Store;


// $r.props.categoriess[0].forEach(e => {console.log(e.thumb)})