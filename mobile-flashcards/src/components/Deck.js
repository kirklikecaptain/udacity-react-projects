import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function Deck (props) {
		const { title, questions } = props

		return (
			<View style={styles.container}>
				<Text style={styles.title}>
					{title}
				</Text>
				<Text style={styles.count}>
					{questions.length} card{questions.length !== 1 && 's'}
				</Text>
			</View>
		)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		padding: 20,
		backgroundColor: 'white',
		marginBottom: 20,
		borderRadius: 3
	},
	title: {
		fontSize: 24,
		marginBottom: 10
	},
	count: {
		color: '#bbb'
	}
})
