import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import BookList from './BooksList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
      .then(response => response.json())
      .then(books => {
        this.setState({
          books: books
        })
      })
  }

  render() {
    return (
      <div>
        <Menu/>
        <BookList books = {this.state.books}/>
      </div>
    )
  }
}

export default App;
