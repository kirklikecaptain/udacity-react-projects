import { ANSWER_QUESTION, RECEIVE_USERS } from '../actions/_constants'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }

    case ANSWER_QUESTION :
      return {
        ...state,
        [action.question.authedUser]: {
          ...state[action.question.authedUser],
          answers: {
            ...state[action.question.authedUser].answers,
            [action.question.qid]: action.question.answer,
          },
        },
      }

    default :
      return state
  }
}