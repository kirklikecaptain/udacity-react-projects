import React, { Component } from 'react';
import { connect } from 'react-redux'
import Poll from './Poll'

class ListAnsweredPolls extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <ul>
            {this.props.answeredQuestions.map((id) => (
              <li key={id}>
                <Poll id={id} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser]
  const sortedQuestions = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  const answeredQuestions = sortedQuestions.filter(id => user.answers.hasOwnProperty(id))

  return {
    answeredQuestions
  }
}

export default connect(mapStateToProps)(ListAnsweredPolls)