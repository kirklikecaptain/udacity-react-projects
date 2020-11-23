import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { createDeck } from '../api/storage'
import { addDeck } from '../redux/actions'

class AddDeck extends Component {
	componentWillMount() {
		this.setState({
			text: ''
		})
	}

	addNewDeck = () => {
		const entry = this.state
		const {decks} = this.props

		if (!entry.text) {
			Alert.alert(
				'Mandatory',
				'This deck needs a name!'
			);
		} else {
			if (decks[entry.text]) {
				Alert.alert(
					'Error!',
					'A deck by this name already exists, try another.'
				);
			} else {
				const newDeck = {
					[entry.text]: {
						title: entry.text,
						questions: []
					}
				}

				this.props.dispatch(addDeck(newDeck))
				createDeck(newDeck)

				Alert.alert(
					'Successful', 'Deck Added',
					[
						{text: 'OK', onPress: () => this.props.navigation.navigate('DeckView', {
							title: entry.text,
							questions : []
						})}
					],
				);

				this.setState({text: ''})
			}
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.card}>
					<Text style={styles.label}>Deck Title</Text>

					<TextInput
						value={this.state.text}
						style={styles.input}
						placeholder='Enter a deck title here'
						onChangeText={text => this.setState({text})}/>

					<TouchableOpacity
						onPress={this.addNewDeck}
						style={styles.submitButton}>
						<Text style={styles.submitText}>Create New Deck</Text>

					</TouchableOpacity>
					</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	card: {
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 3,
	},
	label: {
		fontSize: 24,
		textAlign: 'center'
	},
	input: {
		padding: 10,
		height: 46,
		borderRadius: 3,
		backgroundColor: '#fff',
		marginBottom: 16
	},
	submitButton: {
		padding: 20,
		borderRadius: 3,
		backgroundColor: 'green'
	},
	submitText: {
		color: 'white',
		textAlign: 'center'
	},
})

function mapStateToProps(state) {
	return {
		decks: state,
	}
}

export default connect(mapStateToProps)(AddDeck)
