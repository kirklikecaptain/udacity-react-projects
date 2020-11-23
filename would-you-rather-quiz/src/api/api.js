import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA'


export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion (question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer (answer) {
  return _saveQuestionAnswer(answer)
}

export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatQuestion (question, author) {
  const { id, timestamp, optionOne, optionTwo } = question
  const { name, avatarURL } = author

  return {
    id,
    timestamp,
    name,
    avatarURL,
    optionOne,
    optionTwo
  }
}

