import React, { PureComponent } from 'react'

class ShelfChanger extends PureComponent {

	render() {

		const { books, book, changeShelf } = this.props

		//establish default value for new books
		let currentShelf = 'none'

		//loop through books array for a match, if it's in the array, update dropdown to approprate option
		for (let item of books) {
			if (item.id === book.id)  {
				currentShelf = item.shelf
				break
			}
		}

		return (
			<div className="book-shelf-changer">
				<select
					onChange={(event) => changeShelf(this.props.book, event.target.value)}
          value={ currentShelf }>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default ShelfChanger
