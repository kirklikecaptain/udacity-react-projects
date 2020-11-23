import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import NewDeck from './NewDeck'
import DeckList from './DeckList'
import DeckView from './DeckView'
import NewQuestion from './NewQuestion'
import Quiz from './Quiz'

const Tabs = createMaterialTopTabNavigator(
	{
		DeckList: {
			screen: DeckList,
			navigationOptions: {
					tabBarLabel: 'All Decks'
			}
		},
		NewDeck: {
			screen: NewDeck,
			navigationOptions: {
					tabBarLabel: 'New Deck'
			}
		}
	},
	{
		tabBarOptions: {
			indicatorStyle: {
				backgroundColor: 'green'
			},
			labelStyle: {
				color: 'green'
			},
			style: {
				backgroundColor: 'white',
			}
		}
	}
)

export const AppNavigation = createStackNavigator({
	Home: {
		screen: Tabs,
		navigationOptions: {
			title: 'Mobile Flashcards',
			tintColor: 'red',
			headerTintColor: 'white',
			headerStyle: {
				backgroundColor: 'green'
				}
		}
	},
	DeckView: {
		screen: DeckView,
		navigationOptions: {
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: 'green'
				}
		},
	},
	Quiz: {
		screen: Quiz,
		navigationOptions: {
				title: 'Quiz',
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: 'green'
				}
		},
	},
	NewQuestion: {
		screen: NewQuestion,
		navigationOptions: {
				title: 'New Question',
				headerTintColor: 'white',
				headerStyle: {
					backgroundColor: 'green'
				}
		}
	}
})