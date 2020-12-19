 import { SET_AUTHED_USER } from "../actions/authedUserAction";

export default function authedUser (state = null, action) {
    switch (action.type) {
      case SET_AUTHED_USER :
        return action.userId
      default :
        return state
    }
  } 

