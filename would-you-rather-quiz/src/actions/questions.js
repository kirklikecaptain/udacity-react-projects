import { saveQuestion, saveQuestionAnswer } from '../api/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

import { RECEIVE_QUESTIONS, ADD_QUESTIONS, ANSWER_QUESTION } from './_constants'

function addQuestion (question) {
  return {
    type: ADD_QUESTIONS,
    question
  }
}

export function answerQuestion (question) {
  return {
    type: ANSWER_QUESTION,
    question
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}


export function handleAnswerQuestion (qid, answer) {
  return (dispatch, getState) => {

    const { authedUser } = getState()
    const question = {
      authedUser,
      qid,
      answer
    }

    console.log(question)

    dispatch(answerQuestion(question))

    return saveQuestionAnswer(question)
      .catch((e) => {
        console.warn('Error in handleAnswerquestion: ', e)
        alert('There was an error answering this poll. Please try again.')
      })

  }
}