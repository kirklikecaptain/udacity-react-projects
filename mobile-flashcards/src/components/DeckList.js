import React, { Component } from 'react'
import { TouchableOpacity, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../redux/actions'
import { fetchDecks } from '../api/storage'
import Deck from './Deck'

class DeckList extends Component {

	componentDidMount() {
		const {dispatch} = this.props
		fetchDecks().then(decks => dispatch(getDecks(decks)))
	}

	renderItem = ({item}) => (
		<View>
			<TouchableOpacity onPress={() =>
				this.props.navigation.navigate('DeckView', item)}>
				<Deck
					title={item.title}
					questions={item.questions}/>
			</TouchableOpacity>
		</View>
	)

	render() {
		return (
			<View style={{padding: 20}}>
				<FlatList
					data={Object.values(this.props.decks).sort((a, b) => a.title > b.title)}
					renderItem={this.renderItem}
					keyExtractor={(item, index) => index.toString()}/>
			</View>
		)
	}
}

function mapStateToProps(state) {
	return {
		decks: state,
	}
}

export default connect(mapStateToProps)(DeckList);
