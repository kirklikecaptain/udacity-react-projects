import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'
import '../css/_base.css';
import '../css/NewPoll.css';


class NewPoll extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }

  handleOne = (e) => {
    const optionOne = e.target.value
    this.setState(() => ({
      optionOne
    }))
  }
  handleTwo = (e) => {
    const optionTwo = e.target.value
    this.setState(() => ({
      optionTwo
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState(() => ({
      optionOne: '',
      optionTwo: '',
      toHome: true,
    }))
  }

  render() {
    const { optionOne, optionTwo, toHome } = this.state

    if ( toHome === true ) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <div className='container'>
          <form onSubmit={this.handleSubmit}>
            <h3 className='center-text new-header'>New Poll</h3>
            <hr/>
            <h3 className='center-text sub-header'>Would you rather</h3>
            <div className="row">
              <textarea
                placeholder='Option One'
                value={optionOne}
                onChange={this.handleOne}
                className='textarea'
                maxLength={130}
                rows='3'>
              </textarea>
              <div className='or'>or</div>
              <textarea
                placeholder='Option Two'
                value={optionTwo}
                onChange={this.handleTwo}
                className='textarea'
                maxLength={130}
                rows='3'>
              </textarea>
            </div>
            <div className='left-align'>
              <button
                className='submit-button'
                type='submit'
                disabled={optionOne === '' || optionTwo === ''}>
                Submit Poll
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(NewPoll)
