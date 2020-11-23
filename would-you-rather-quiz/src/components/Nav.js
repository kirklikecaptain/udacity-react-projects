import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../css/_base.css'
import '../css/Nav.css'
import { Redirect } from 'react-router-dom'
import { signOut } from '../actions/authedUser'

class Nav extends Component {

  state = {
    signOut: false
  }

  handleSignout = (e) => {
    const { dispatch } = this.props
    e.preventDefault()
    dispatch(signOut())
    this.setState(() => ({ signOut: true }))
  }

  render() {
    if ( signOut === true ) {
      return <Redirect to='/' />
    }

    return (
      <nav className='nav'>
        <div className='container nav-container'>
          <ul className='nav-bar'>
            <li>
              <NavLink to='/' exact className='nav-link'>
                New
              </NavLink>
            </li>
            <li>
              <NavLink to='/answered' exact activeClassName="active" className='nav-link'>
                History
              </NavLink>
            </li>
            <li>
              <NavLink to='/leaderboard' exact className='nav-link'>
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' exact className='nav-link'>
                Add Poll
              </NavLink>
            </li>

          </ul>
          <button className='sign-out' onClick={(e) => this.handleSignout(e)}>Sign Out</button>
        </div>
      </nav>
    )
  }

}


export default connect()(Nav)
