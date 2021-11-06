import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  constructor(props){
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
}
  handleToggle(){
   let value= this.props.value;
   let cntcol = value % 10;
   let cntrow = (value - cntcol)/10;
   this.props.Toggle(cntrow,cntcol);
  }
  render(){
  let x = this.props.is_lit ? "lit" : "";
  let class_string = "CellBox " + x ;
  return (
   <>
  <td className={class_string} onClick={this.handleToggle} ></td>
  </>
  );
  }
}

export default Cell;
