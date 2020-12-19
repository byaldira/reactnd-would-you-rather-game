import { act } from 'react-dom/test-utils';
import { GET_ALL_USERS , ANSWER_TO_QUESTION , ADD_QUESTION} from '../actions/kullanicilarActions'


export default function kullanicilar(state = {} , action) {
    switch (action) {
        case GET_ALL_USERS:
            return {
                ...state,
                ...action.kullanicilar
            }
        case ANSWER_TO_QUESTION:
            return {
                ...state,
                [action.authedUser]: { 
                  ...state[action.authedUser], 
                  answers: {
                      ...state[action.authedUser].answers,
                        [action.quesId]: action.answer
                  }
                }
              }
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.author]: { 
                  ...state[action.question.author], 
                  questions: state[action.question.author].questions.concat([action.question.id])
                }
              }
        default:
            break;
    }
}