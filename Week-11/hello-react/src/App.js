import React, {Component} from 'react';
import './App.css';
import Name from './Name';
import Friends from './Friends'


class App extends Component {
  render() {
    const names = [{name:"Clarence"}, {name:"William"}, {name:"Zach"}];

    return(
      <div>
        <h1>Hello World</h1>
        <Name lastName="Saj" firstName="Shawn"/>
        <Friends allFriends = {names}/>
      </div>
    )
  }
}

export default App;
