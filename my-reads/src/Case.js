import React, { PureComponent } from 'react'
import Shelf from './Shelf'
import * as constants from './_constants'

class BookCase extends PureComponent {

	render() {

		const { books, changeShelf } = this.props

		return (

			<div className="list-books-content">
				{constants.SHELF_TYPES.map( shelf => {
					const placeBooks = books.filter( book => book.shelf === shelf.type )
					return (
						<div className="bookshelf" key={ shelf.type }>
              <h2 className="bookshelf-title">{ shelf.title }</h2>
              <div className="bookshelf-books">
              	<Shelf
									books={ placeBooks }
									changeShelf={ changeShelf }
								/>
            	</div>
						</div>
					)})
				}
			</div>
		)
	}
}

export default BookCase
