import React, { Component } from 'react';
import './App.css';
import Board from './Board';


class App extends Component {
  render(){
  
  return (
    <div> 
    <Board no_of_rows={4} no_of_cols={4}/>
    </div>

  );
  }
}

export default App;
