import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

class DeckView extends Component {

	render() {
		let {title} = this.props.navigation.state.params
		const questions = this.props.decks[title] && this.props.decks[title].questions

		return (
			<View style={styles.container}>
				<View style={styles.card}>
					<View>
						<Text style={styles.title}>
							{title}
						</Text>
						<Text style={styles.count}>
							{questions.length} card{styles.length !== 1 && 's'}
						</Text>
					</View>

					<TouchableOpacity
						onPress={() => {
							this.props.navigation.navigate('NewQuestion', {
								title,
								questions
							})
						}}
						style={styles.addCardButton}>
						<Text style={styles.addCardText}>Add Card</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							this.props.navigation.navigate('Quiz', {
								title,
								questions
							})
						}}
						style={styles.startQuizButton}>
						<Text style={styles.startQuizText}>Start Quiz</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		borderRadius: 3
	},
	card: {
		padding: 20,
		backgroundColor: 'white'
	},
	count: {
		textAlign: 'center',
		color: '#bbb'
	},
	title: {
		textAlign: 'center',
		fontSize: 32,
		marginBottom: 24
	},
	addCardButton: {
		backgroundColor: '#eee',
		padding: 20,
		borderRadius: 3,
		marginBottom: 20,
		marginTop: 32,
	},
	addCardText: {
		color: '#000',
		fontSize: 18,
		textAlign: 'center',
	},
	startQuizButton: {
		backgroundColor: 'green',
		padding: 20,
		borderRadius: 3,
	},
	startQuizText: {
		color: 'white',
		fontSize: 18,
		textAlign: 'center'
	}
})

function mapStateToProps(state) {
	return {
		decks: state,
	};
}

export default connect(mapStateToProps)(DeckView);
