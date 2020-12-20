import NavBar from './NavBar'
import Login from './Login'
import {handleAppInitialData } from '../actions/sharedActions'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'


class App extends Component {

  componentDidMount() {
    // Buraya uygulama ilk start edildiğinde ki dosyalar gelicek!! 
      this.props.dispatch(handleAppInitialData())
      console.log(this.props.loading);
  }

  render(){
    return(
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="App">
          <NavBar />
            <div className="w3-container">
            { 
              this.props.loading === true
              ? "Page is loading"
              : 
             <div>Yüklendi</div>
             }
            </div>
            
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)
