import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends Component {

	state = {
		searchResults: [],
		searchError: false
	}

	updateQuery = (queryTerm) => {

		if (queryTerm.length === 0) {
			this.setState({ searchResults: [], searchError: false})
		}

		if (queryTerm) {
			BooksAPI.search(queryTerm)
				.then((newBooks) => (
					newBooks.length > 0
					? this.setState(() => ({	searchResults: newBooks, searchError: false }))
					: this.setState(() => ({	searchResults: [], searchError: true	}))
			))
		}
	}

	componentDidMount() {
		document.getElementById("searchField").focus()
	}

	render() {

		const { searchResults, searchError } = this.state
		const { books, changeShelf } = this.props

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						<input
							id="searchField"
							type="text"
							placeholder="Find a new book by title or author"
							onChange={ event => { this.updateQuery(event.target.value) }}
							/>
					</div>
				</div>
				<div className="bookshelf">
					{ searchResults.length > 0 && (
						<h2 className="bookshelf-title">Search Results</h2>
					)}
					<ol className="books-grid">
						{ searchResults.map((book) => (
							<li key={ book.id }>
								<Book
									book={ book }
									books={ books }
									changeShelf={ changeShelf }
								/>
							</li>
						))}
						{ searchError === true && (
							<div style={{paddingTop: 50}}>Woops, no results were found! Try another search term.</div>
						)}
					</ol>
				</div>
			</div>
		)
	}
}

export default Search
