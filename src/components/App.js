import NavBar from './NavBar'
import {handleAppInitialData } from '../actions/sharedActions'
import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'


class App extends Component {

  // componentDidMount(){
  //   // Buraya uygulama ilk start edildiğinde ki dosyalar gelicek!! 
  //   // this.props.dispatch(handleAppInitialData())
  // }

  render(){
    return(
      <div className="App">
          <NavBar />
      </div>
    )
  }
}

export default App
