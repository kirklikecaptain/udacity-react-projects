import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'
import Vote from './Vote'
import '../css/PollPage.css';

class PollPage extends Component {
  render() {
    const { id } = this.props

    return (
      <div>
        <div className='container'>
          <Poll id={id}>
            <Vote id={id} />
          </Poll>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, props) {
  const { id } = props.match.params

  return { id }
}

export default connect(mapStateToProps)(PollPage)