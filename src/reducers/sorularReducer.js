import { Switch } from "react-router-dom";
import {ADD_QUESTION , ADD_ANSWER, GET_QUESTIONS} from '../actions/sorularActions'


export default function questions(state ={} , action) {
    switch (action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ADD_ANSWER:
            return {
                ...state,
                [action.soruId] :{
                    ...[action.soruId],
                      [action.cevapId] :{
                        ...state[action.soruId][action.cevapId], 
                        votes : state[action.soruId][action.cevapId].votes.concat([action.authedUser])
                      }
                }
            }
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        default:
            return state
    }
}