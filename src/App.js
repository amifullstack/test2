import React, { Component } from 'react';
import { BrowserRouter as Router,
   Route,
   Link,
   Switch,   
    } from 'react-router-dom';
import {browserHistory, IndexRoute} from 'react-router'
import { Provider } from 'react-redux';

// Components
import HeaderNavbar from './Components/Shared/Navbar/HeaderNavbar';
import HomePage from './Components/Home/HomePage'
import Single from './Components/Single/Single';
import Store from './Store/index';
import About from './Components/About/About';

// CSS
import './App.css'

// App/Grid1,2,3,Single
import StoreApp from './Components/StoreApp';
import {Grid2StoreApp} from './Components/StoreApp'; //*imp{}
import {Grid3StoreApp} from './Components/StoreApp';
import {SingleStoreApp} from './Components/StoreApp';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Provider store={Store}>
      
      <Router >
        <div>
        <HeaderNavbar/>          
          <Switch>
            <Route exact path='/' component={StoreApp} />
            <Route path='/gridtwo' component={Grid2StoreApp} />
            <Route path='/gridthree' component={Grid3StoreApp} />            
            <Route path='/view/:postId' component={SingleStoreApp} />           
            <Route path="/about" component={About} />
            
            {/* Add all route above this line */}
            <Route component = {NotFound} />
          </Switch>         
               
        </div>        
      </Router>
      </Provider>
    )
  }
}

const NotFound = () => {
  return(
    <div className="pagenotfound">
      <h1><i class="fas fa-hand-paper"></i></h1><code>Hold on..404 Here, Page that you looking is NOT FOUND!!</code>
    </div>
  )
}
export default App;
