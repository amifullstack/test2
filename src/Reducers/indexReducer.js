import {combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


import animals from './animalsReducer';
import foods from './foodsReducer';
import furniture from './furnitureReducer';
import nature from './natureReducer';
import technology from './technologyReducer';
import transport from './transportReducer';

const rootReducer = combineReducers({
  animals, foods, furniture, nature, technology, transport, router: routerReducer
});

export default rootReducer;