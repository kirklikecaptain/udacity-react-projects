import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate, formatQuestion } from '../api/api'
import '../css/Poll.css';

class Poll extends Component {

  render() {

    const { question, authedUser } = this.props

    if (question === null) {
      return <p className='error'>-404-<br/>Whoops.<br/>This poll does not exist...</p>
    }

    const { id, name, avatarURL, timestamp, optionOne, optionTwo } = question

    return (
      <div className='poll-card'>
        <div className='poll-data'>
          <p className='poll-info'><span><img className='card-avatar' src={avatarURL} alt={name} /><span>{name} wonders...</span></span><span className='submit-date'>{formatDate(timestamp)}</span></p>
          <hr />
          <h3 className='poll-text center-text'>Would you rather</h3>
        </div>
        <Link to={`/questions/${id}`} className='poll-link'>
          <div className='poll-options'>
            <div className={`option-one ${optionOne.votes.includes(authedUser) && 'choice'}`}>
              {optionOne.text}
              {optionOne.votes.includes(authedUser) && ' ✔'}
            </div>
            <div className={`option-two ${optionTwo.votes.includes(authedUser) ? 'choice' : ''}`}>
              {optionTwo.text}
              {optionTwo.votes.includes(authedUser) && ' ✔'}
            </div>
          </div>
        </Link>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, { id }) {
  const question = questions[id]

  return {
    authedUser,
    users,
    question: question
      ? formatQuestion(question, users[question.author])
      : null
  }
}

export default withRouter(connect(mapStateToProps)(Poll))


