import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import PollPage from './PollPage'
import NewPoll from './NewPoll'
import ListNewPolls from './ListNewPolls'
import ListAnsweredPolls from './ListAnsweredPolls'
import Leaderboard from './Leaderboard'
import Signin from './Signin'
import LoadingBar from 'react-redux-loading-bar'
import '../css/_base.css';
import '../css/App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />

          {this.props.signedOut === true
            ? <Signin />
            : <div>
                <Nav />
                <Route path='/' exact component={ListNewPolls} />
                <Route path='/questions/:id' component={PollPage} />
                <Route path='/add' component={NewPoll} />
                <Route path='/answered' component={ListAnsweredPolls} />
                <Route path='/leaderboard' component={Leaderboard} />
              </div>}
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    signedOut: authedUser === null
  }
}


export default connect(mapStateToProps)(App)
