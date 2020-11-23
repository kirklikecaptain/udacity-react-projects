import { AsyncStorage } from 'react-native'
import { initialData } from './initialData'

export const DECKS_STORAGE_KEY = 'decks:mobile-flashcards'

export function fetchDecks() {
	return AsyncStorage.getItem(DECKS_STORAGE_KEY)
		.then(results => {
			return results === null ? setInitialData() : JSON.parse(results)
		})
}

export function createDeck(deck) {
	return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function addQuestionForDeck({card, deckName}) {
	return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
		let decks = JSON.parse(result)

		let newQuestions = JSON.parse(JSON.stringify(decks[deckName].questions))
		newQuestions[newQuestions.length] = card

		const value = JSON.stringify({
			[deckName]: {title: deckName, questions: newQuestions}
		})

		AsyncStorage.mergeItem(DECKS_STORAGE_KEY, value)
	})
}

export function setInitialData() {
	AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData))
	return initialData
}
