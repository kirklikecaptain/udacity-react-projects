import { SIGN_OUT, SET_AUTHED_USER } from './_constants'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function signOut () {
  return {
    type: SIGN_OUT
  }
}