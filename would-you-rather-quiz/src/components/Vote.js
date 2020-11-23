import React, { Component } from 'react'
import { connect } from 'react-redux'
import Results from './Results'
import { handleAnswerQuestion } from '../actions/questions'
import '../css/Vote.css';

class Vote extends Component {

  handleVote = (e) => {
    e.preventDefault()
    const { id, dispatch } = this.props
    dispatch(handleAnswerQuestion(id, e.target.value))
  }

  render() {
    const { authedUser, users, id } = this.props
    return (
      <div>
        {!users[authedUser].answers.hasOwnProperty(id)
          ? <div className='vote-box'>
              <button className='vote-button first-op' value='optionOne' onClick={(e) => this.handleVote(e)}>Cast Vote</button>
              <button className='vote-button second-op' value='optionTwo' onClick={(e) => this.handleVote(e)}>Cast Vote</button>
            </div>
          : <Results id={id} />
        }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }) {
  return {
    authedUser,
    questions,
    users
  }
}

export default connect(mapStateToProps)(Vote)