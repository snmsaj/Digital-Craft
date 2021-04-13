import React, {Component} from 'react';
import './App.css';
import Stepper from './Stepper'
import Switch from './Switch'

class App extends Component{
  render() {
    return(
      <div>
      <Stepper/>
      <Switch/>
      </div>
    )
  }
}

export default App;
