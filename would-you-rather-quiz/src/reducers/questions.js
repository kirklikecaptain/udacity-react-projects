import { RECEIVE_QUESTIONS, ADD_QUESTIONS, ANSWER_QUESTION } from '../actions/_constants'

export default function questions (state = {} , action) {

  switch(action.type) {

    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }

    case ADD_QUESTIONS :
      return {
        ...state,
        [action.question.id]: action.question
      }

    case ANSWER_QUESTION:
    return {
      ...state,
      [action.question.qid]: {
        ...state[action.question.qid],
        [action.question.answer]: {
          ...state[action.question.qid][action.question.answer],
          votes: state[action.question.qid][action.question.answer].votes.concat([action.question.authedUser])
        }
      }
    }

    default :
      return state
  }

}