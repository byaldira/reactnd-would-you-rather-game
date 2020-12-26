import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { addQuestionToUser,answerQuestionToUser } from './users'

export const ADD_QUESTION     ='ADD_QUESTION'
export const ADD_ANSWER       ='ADD_ANSWER'
export const RECIEVE_QUESTIONS='RECIEVE_QUESTIONS'

// For Adding a new question 
export function addQuestion (question){
  return{
      type: ADD_QUESTION,
      question,
  }
}

//For question answer 
export function addAnswer(authedUser,qId,answer){
    return{
        type: ADD_ANSWER,
        authedUser,
        qId,
        answer,
    }
}

//To Get question
export function recieveQuestion(questions){
    return{
        type: RECIEVE_QUESTIONS,
        questions
    }
}

//To add new question and assing to user 
export function handleAddQuestion (optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
      
        dispatch(showLoading());
    
        return saveQuestion({
          optionOneText: optionOne,
            optionTwoText: optionTwo,
            author : authedUser,
      })
        .then((question) => {
        dispatch(addQuestion(question)) 
        dispatch(addQuestionToUser(question)) })
        .then(() => dispatch(hideLoading()))
  }
}

export function handleAddAnswer (qId, answer) {
 
  return (dispatch, getState) => {
      const { authedUser } = getState();
        dispatch(showLoading());
        return saveQuestionAnswer({
          authedUser,
          qId,
          answer
      })
        .then(() => { 
            dispatch(addAnswer(authedUser, qId, answer))
            dispatch(answerQuestionToUser(authedUser, qId, answer))
         })
        .then(() => dispatch(hideLoading()))
  }
}