import React, {Component} from 'react';
import './App.css';
import Menu from './Menu'
import Header from './Header'
import Article from './Article'

class App extends Component {
  render() {
    return(
      <div>
      <Menu/>
      <Header/>
      <Article title="Hello WatchKit" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perferendis, pariatur, fugiat perspiciatis libero asperiores quas earum recusandae saepe quae voluptatum minus deserunt ducimus. Maiores quo culpa ea. Quaerat deleniti non repellendus labore! Dolore, sunt perspiciatis corrupti dolores aperiam reiciendis consequatur, ratione explicabo natus cum nemo magnam sequi possimus vel." comments="12" likes="124" />
      
      <Article title="Introduction to Swift" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perferendis, pariatur, fugiat perspiciatis libero asperiores quas earum recusandae saepe quae voluptatum minus deserunt ducimus. Maiores quo culpa ea. Quaerat deleniti non repellendus labore!" comments="15" likes="45" />
      </div>
      
    )
  }
}

export default App;
