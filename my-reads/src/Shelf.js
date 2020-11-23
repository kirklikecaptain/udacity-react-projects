import React, { PureComponent } from 'react'
import Book from './Book'

class Shelf extends PureComponent {

	render() {
		const { books, changeShelf } = this.props
		return (
			<ol className='books-grid'>
				{books.map((book) => (
					<li key={ book.id }>
						<Book
							book={ book }
							books={ books }
							changeShelf={ changeShelf }
						/>
					</li>
				))}
			</ol>
		)
	}
}

export default Shelf
