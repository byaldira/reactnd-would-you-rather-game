import { GET_ALL_USERS , ANSWER_TO_QUESTION , ADD_QUESTION} from '../actions/kullanicilarActions'


export default function users(state = {} , action) {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                ...action.users
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
          return state
    }
}