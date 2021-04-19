import FetchBooks from './FetchBooks'

function BooksPage() {

    FetchBooks()

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


}