import React, { Component } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { addQuestionForDeck } from '../api/storage'
import { addQuestion } from '../redux/actions'

class NewQuestion extends Component {

	state = {
		question: '',
		answer: ''
	};

	submitQuestion = () => {
		let alert = {}
		const {question, answer} = this.state;
		const {title, questions} = this.props.navigation.state.params

		if (question === '') {
			Alert.alert('Mandatory', 'Please provide a question.')
			return
		}
		if (answer === '') {
			Alert.alert('Mandatory', 'Please provide an answer.')
			return
		}

		const params = {title, questions, question, answer}

		this.props.dispatch(addQuestion(params))

		addQuestionForDeck({
			card: {question, answer},
			deckName: title
		})

		Alert.alert('Successful', 'Question Added Successfully',
			[
				{ text: 'OK', onPress: () => this.props.navigation.goBack() }
			]
		)
	};

	render() {
		const {question, answer} = this.state

		return (
			<View style={style.container}>
				<View style={style.card}>
					<Text>Question</Text>
					<TextInput
						defaultValue="Question"
						value={question}
						style={style.input}
						onChangeText={question => this.setState({question})}/>
					<Text>Answer</Text>
					<TextInput
						defaultValue="Answer"
						value={answer}
						style={style.input}
						onChangeText={answer => this.setState({answer})}/>

					<TouchableOpacity
						onPress={this.submitQuestion}
						style={style.submitButton}>
						<Text style={style.submitText}>Add Card</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	card: {
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 3
	},
	input: {
		padding: 10,
		height: 46,
		borderRadius: 3,
		backgroundColor: 'white',
		marginBottom: 16
	},
	submitButton: {
		padding: 20,
		borderRadius: 3,
		backgroundColor: 'green'
	},
	submitText: {
		color: 'white',
		textAlign: 'center',
	}
})

function mapStateToProps(state) {
	return {
		decks: state,
	}
}

export default connect(mapStateToProps)(NewQuestion)
