import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

class Quiz extends Component {

	state = {
		questionIndex: 0,
		correctAnswers: 0,
		shouldShowAnswer: false,
	};

	onCorrect = () => {
		const {questionIndex, correctAnswers} = this.state;
		this.setState({
			questionIndex: questionIndex + 1,
			correctAnswers: correctAnswers + 1,
			shouldShowAnswer: false
		});
	};

	startQuiz = () => {
		this.setState({
			questionIndex: 0,
			correctAnswers: 0,
			shouldShowAnswer: false
		});
	};

	backToDeck = () => {
		this.props.navigation.goBack();
	}

	onIncorrect = () => {
		this.setState({
			questionIndex: this.state.questionIndex + 1
		});
	};

	showAnswer = () => {
		this.setState({
			shouldShowAnswer: !this.state.shouldShowAnswer
		});
	};

	render() {
		const { questionIndex, correctAnswers, shouldShowAnswer } = this.state
		const { questions } = this.props.navigation.state.params
		const isQuestionAvailable = questionIndex < questions.length
		const questionLeft = questions.length - questionIndex

		return (

			<View style={styles.container}>
				{isQuestionAvailable ? (
					<View style={styles.card}>
						<View>
							<Text style={styles.count}>{questionLeft} to go!</Text>
						</View>

						<View>
							<View>
								{shouldShowAnswer ? (

										<View>
											<Text style={styles.answerText}>{questions[questionIndex].answer}</Text>
											<TouchableOpacity style={styles.toggleAnswerButton} onPress={this.showAnswer}>
												<Text style={styles.toggleAnswerText}>Show Question</Text>
											</TouchableOpacity>
										</View>

									) : (

										<View>
											<Text style={styles.questionText}>{questions[questionIndex].question}</Text>
											<TouchableOpacity style={styles.toggleAnswerButton} onPress={this.showAnswer}>
												<Text style={styles.toggleAnswerText}>Show Answer</Text>
											</TouchableOpacity>
										</View>

								)}
							</View>
						</View>

						<View style={styles.answerButtons}>
							<TouchableOpacity style={styles.correctButton} onPress={this.onCorrect}>
								<Text style={styles.correctButtonText}>Correct</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.incorrectButton}onPress={this.onIncorrect} >
								<Text style={styles.incorrectButtonText}>Incorrect</Text>
							</TouchableOpacity>
						</View>
					</View>
				) : (
					<View style={styles.card}>
						<Text style={styles.congratsTitle}>
							Nice work!
						</Text>
						<Text style={styles.congratsMessageStart}>
							You correctly answered
						</Text>
						<Text style={styles.congratsMessage}>
							{correctAnswers} out of {questions.length}
						</Text>
						<View>
							<TouchableOpacity style={styles.correctButton} onPress={this.startQuiz}>
								<Text style={styles.correctButtonText}>Try this quiz again</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.toggleAnswerButton} onPress={this.backToDeck}>
								<Text style={styles.toggleAnswerText}>Back to Deck</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	card: {
		padding: 20,
		backgroundColor: 'white'
	},
	count: {
		textAlign: 'center',
		marginBottom: 20
	},
	questionText: {
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 24
	},
	toggleAnswerButton: {
		padding: 10,
		backgroundColor: '#eee',
		marginBottom: 24
	},
	toggleAnswerText: {
		textAlign: 'center'
	},
	correctButton: {
		backgroundColor: 'green',
		padding: 20,
		borderRadius: 3,
		marginBottom: 24,
	},
	correctButtonText: {
		color: 'white',
		textAlign: 'center'
	},
	incorrectButton: {
		backgroundColor: 'red',
		padding: 20,
		borderRadius: 3
	},
	incorrectButtonText: {
		color: 'white',
		textAlign: 'center'
	},
	answerText: {
		textAlign: 'center',
		marginBottom: 24,
		fontSize: 24
	},
	congratsTitle: {
		textAlign: 'center',
		fontSize: 32,
		marginBottom: 24
	},
	congratsMessageStart: {
		textAlign: 'center',
		fontSize: 24
	},
	congratsMessage: {
		textAlign: 'center',
		fontSize: 24,
		marginBottom: 24
	}
})

export default Quiz
