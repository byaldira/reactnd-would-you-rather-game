export const SET_AUTHED_USER='SET_AUTHED_USER'


// For Set authed User 
export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
} 
