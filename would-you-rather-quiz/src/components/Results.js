import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/Results.css';

class Results extends Component {

  render() {
    const { questions, id } = this.props
    const { optionOne, optionTwo } = questions[id]
    return (
      <div className='scoreboard'>
        <div className='score-col'>
          <p className="center-text">{optionOne.votes.length} Vote{optionOne.votes.length !== 1 && 's'}</p>
          <hr/>
          <ol>
            {optionOne.votes.map((user) => (
                <li key={user}>
                  <p>{user}</p>
                </li>
              ))}
          </ol>
        </div>
        <div className='score-col'>
          <p className="center-text">{optionTwo.votes.length} Vote{optionTwo.votes.length !== 1 && 's'}</p>
          <hr/>
          <ol>
            {optionTwo.votes.map((user) => (
              <li key={user}>
              <p>{user}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className='center-text another-poll'><Link to='/'>Answer Another Poll</Link></div>
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questions
  }
}

export default connect(mapStateToProps)(Results)