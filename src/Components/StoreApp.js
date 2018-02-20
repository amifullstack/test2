import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actionCreators from '../Actions/ActionCreator';
import HomePage from '../Components/Home/HomePage';
import Grid from '../Components/Grid/Grid';
import Grid2 from '../Components/Grid2/Grid2';
import Grid3 from '../Components/Grid3/Grid3';
import Single from '../Components/Single/Single';


function mapStateToProps(state) {
  return{
    posts: state.posts,
    comments: state.comments,
    animals: state.animals,
    foods: state.foods,
    furniture: state.furniture,
    nature: state.nature,
    technology: state.technology,
    transport: state.transport    
  }
}

// --------LOOKING FOR USECASE------------------
// function mapAnimalStateToProps(state) {
//   return{
//     animals: state.animals,
//     foods: state.foods
//   }
// }

// function mapFoodsStateToProps(state) {
//   return{
//     foods: state.foods
//   }
// }
// --------------------------------------------

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const StoreApp = connect(mapStateToProps, mapDispatchToProps)(Grid);
export const Grid2StoreApp = connect(mapStateToProps, mapDispatchToProps)(Grid2);
export const Grid3StoreApp = connect(mapStateToProps, mapDispatchToProps)(Grid3);
export const SingleStoreApp = connect(mapStateToProps, mapDispatchToProps)(Single);

export default StoreApp;
