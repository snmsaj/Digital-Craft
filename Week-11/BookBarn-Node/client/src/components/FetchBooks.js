import React, {useState, useEffect} from 'react';

function FetchBooks() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        getAllBooks()
    },[])

    const getAllBooks = () => {
        fetch('http://localhost:8080/books')
        .then(response => response.json())
        .then(data => {
            setBooks(data)
        })
    }

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

    return(bookItems)

}

export default FetchBooks;