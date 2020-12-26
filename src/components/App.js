import { connect } from 'react-redux'
import React, { Component,Fragment } from 'react';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared'
import Login from './Login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import QuestionContainer from './QuestionContainer';
import NotFound from './NotFound';
import NavBar from './NavBar';

class App extends Component {
  componentDidMount() {
    // burada tüm install first state
    // stateler set edilir ve uygulama çalışamaya hazır hale gelir 

    this.props.dispatch(handleInitialData())
  }
  render() {

    return (
      <Router>
       <Fragment>
       <LoadingBar />
       <div> 
         <NavBar/>
         {this.props.loading === true
                ? null
                : <Switch>
                 <Route path='/' exact component={Login} />
                <Route path='/questions/:id' component={QuestionContainer} />
                 <Route path='/new' exact component={NewQuestion} />
                <Route path='/leaderboard' component={LeaderBoard} />
                <Route component={NotFound} />

                  </Switch>}
       </div>
   </Fragment>
 </Router>
    )
  }
}

export default connect()(App);
