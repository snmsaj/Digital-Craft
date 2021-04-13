import { Component } from "react";


class BookList extends Component {

    render() {

        const books = this.props.books
        const bookItems = books.map((book) => {
            return <div className="book">
                <img src = {`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}?raw=true`} alt={book.title}/>
                <h6>{book.title}</h6>
                <p>{book.author}</p>
                </div>
        })

        return (
            <div className="books-container">
                {bookItems}
            </div>
        )
    }
}

export default BookList 