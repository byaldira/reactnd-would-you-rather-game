import {getInitialData} from '../utils/api';
import {recieveQuestion} from './questions'
import {receiveUsers} from './users'
import { showLoading, hideLoading} from 'react-redux-loading'

export function handleInitialData(){
    return(dispatch)=>{
      // Stating the state starting show loading bar! 
      dispatch(showLoading());
        return getInitialData()
          .then(({users,questions})=>{
            // I have the data now set the store 
          dispatch(receiveUsers(users))         
          dispatch(recieveQuestion(questions))
          // My process is finishedd hide loading bar ! 
          dispatch(hideLoading())
        }
        )
    }
}