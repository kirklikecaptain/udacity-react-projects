import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Leaderboard.css';

class Leaderboard extends Component {

  render() {

    const { sortedUsers, authedUser } = this.props

    return (
      <div className='container'>
        <div className="results-card">
          <h3 className='center-text results-header'>Leaderboard</h3>
          <hr/>
          <table className='results-table'>
          <thead>
            <tr>
              <th colSpan='2'>User</th>
              <th>Submitted</th>
              <th>Answered</th>
              <th>Total Score</th>
            </tr>
          </thead>
            <tbody>
              {sortedUsers.map((user) => (
                <tr key={user.id} className={user.id === authedUser ? 'that-me' : ''}>
                  <td className='avatar-cell'><img alt='avatar' className='avatar-img' src={user.avatar} /> </td>
                  <td><span>{user.userName}</span></td>
                  <td className='center-text'><span>{user.submitted}</span></td>
                  <td className='center-text'><span>{user.answered}</span></td>
                  <td className='center-text'><span>{user.userPosition}</span></td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>

      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {

  const sortedUsers = Object.keys(users)
    .map((user) => {
      const userInfo = {
        id: users[user].id,
        avatar: users[user].avatarURL,
        userName: users[user].name,
        submitted: users[user].questions.length,
        answered: Object.keys(users[user].answers).length
      }
      const position = userInfo.answered + userInfo.submitted
      userInfo.userPosition = position
      return (userInfo)
    })
    .sort((a, b) => (
      b.userPosition - a.userPosition
    ))

  return {
    sortedUsers,
    authedUser
  }
}

export default connect(mapStateToProps)(Leaderboard)