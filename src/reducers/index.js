import { combineReducers } from 'redux';
import authedUser from './authedUserReducer';
import kullanicilar from './kullaniciReducer';
import sorular from './sorularReducer';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  authedUser,
  kullanicilar,
  sorular,
  loadingBar: loadingBarReducer
}) 