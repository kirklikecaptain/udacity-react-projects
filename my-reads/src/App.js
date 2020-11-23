import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Case from './Case'
import OpenSearch from './OpenSearch'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
		books: []
  }

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({books})
		})
	}

	changeShelf = (newBook, updatedShelf) => {
		BooksAPI.update(newBook, updatedShelf).then( response => {
			//set shelf
			newBook.shelf = updatedShelf
			//refresh list without the uupdated book to prevent duplicates, if already in books array
			let updatedBooks = this.state.books.filter ( book => book.id !== newBook.id )
			//add new book to books array
			updatedBooks.push(newBook)
			//set state of books to new array
			this.setState({ books: updatedBooks})
		})
	}

  render() {

		const { books } = this.state

    return (
      <div className="app">
				<div className="list-books">
					<div className="list-books-title">
						<h1>My Books</h1>
					</div>

					<Route exact path='/' render={() => (
						<div>
							<Case
								books={ books }
								changeShelf={ this.changeShelf }
							/>
							<OpenSearch />
						</div>
					)} />

					<Route exact path='/search' render={() => (
						<div>
							<Search
								books={ books }
								changeShelf={ this.changeShelf }
							/>
						</div>
					)} />

      	</div>
			</div>
    )
  }
}

export default BooksApp
