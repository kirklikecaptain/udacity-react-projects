import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Signin.css';
import { setAuthedUser } from '../actions/authedUser';

class Signin extends Component {

  handleSignInClick = (e, user) => {
    const { dispatch } = this.props
    e.preventDefault()
    dispatch(setAuthedUser(user))
  }

  render() {

    const { userList } = this.props

    return (
      <div className='container'>
        <div className='signin-card'>
          <h3 className='center-text signin-header'>Choose an account</h3>
          <hr/>
          <ul>
            {userList.map((user) => (
              <li key={user.id}>
                <button className='signin-button' onClick={(e) => this.handleSignInClick(e, user.id)}>
                  <p className='user-item'><img className='signin-avatar' src={user.avatar} alt="avatar"/>{user.userName}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  const userList = Object.keys(users)
    .map((user) => {
      const userInfo = {
        id: users[user].id,
        avatar: users[user].avatarURL,
        userName: users[user].name
      }
      return userInfo
  })

  return {
    userList
  }
}

export default connect(mapStateToProps)(Signin)