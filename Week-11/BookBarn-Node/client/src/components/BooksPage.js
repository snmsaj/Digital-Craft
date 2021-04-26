// import FetchBooks from './FetchBooks'

function BooksPage(props) {
    const books = props.books

    const bookItems = books.map(book => {

        return <div className="book">
                <input type="hidden" value={book.id}></input>
                <img src = {book.imageURL} alt="Book Cover" />
                <h6>{book.title}</h6>
                <p>{book.author}</p>
                <p>{book.genre}</p>
                <p>{book.year}</p>
            </div>
    })

    return (
        <div className="books-container">
            {bookItems}
        </div>
    )
}

export default BooksPage