import { combineReducers } from 'redux';
import authedUser from './authedUserReducer';
import users from './kullaniciReducer';
import questions from './sorularReducer';
import { loadingBarReducer } from 'react-redux-loading';

// bu kısım state'in ismi !!!!!!!! 
export default combineReducers({
  authedUser,  
  users,
  questions,
  loadingBar: loadingBarReducer
}) 