import { RECEIVE_USERS } from './_constants'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}