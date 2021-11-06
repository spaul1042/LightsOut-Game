import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";
// import {Randomboolean} from './Randomboolean';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RandomBoard: [
        [true, true, false, false],
        [true, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
      ],
    };
    this.refresh = this.refresh.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle(cntrow, cntcol) {
    let NextBoard = this.state.RandomBoard;
    let rowno = cntrow - 1;
    let colno = cntcol - 1;
    if (NextBoard[rowno][colno] === true) {
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (
            (i === rowno && j === colno) ||
            (i === rowno && j === colno - 1) ||
            (i === rowno && j === colno + 1) ||
            (i === rowno - 1 && j === colno) ||
            (i === rowno + 1 && j === colno)
          ) {
            let bool1 = !NextBoard[i][j];
            NextBoard[i][j] = bool1;
          }
        }
      }
      this.setState({ RandomBoard: NextBoard });
    }
  }
  refresh() {
    const arr = [true, false];
    let Previous_Board = this.state.RandomBoard;
    let NewRandomBoard = Previous_Board.map((subarray) => {
      return subarray.map(() => {
        return arr[Math.floor(Math.random() * 2)];
      });
    });
    this.setState({ RandomBoard: NewRandomBoard });
  }

  render() {
    function win_test(NextBoard) {
      let chk = 1;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (NextBoard[i][j] === true) {
            chk = 0;
            return chk;
          }
        }
      }
      return chk;
    }
    let cntrow = 0;
    let cntcol = 0;
    let BoardRender = this.state.RandomBoard.map((subarray) => {
      cntrow++;
      cntcol = 0;
      return (
        <tr>
          {subarray.map((element) => {
            cntcol++;
            return (
              <Cell
                Toggle={this.toggle}
                value={cntrow * 10 + cntcol}
                is_lit={element}
              />
            );
          })}
        </tr>
      );
    });
    let chk = win_test(this.state.RandomBoard);

    return (
      <div>
        <div className="Intro">
          {chk === 0 ? (
            <>
              <div className="neon-orange">Lights</div>
              <div className="neon-blue">Out</div>
            </>
          ) : (
            <p></p>
          )}
        </div>

        <table className="BoardBox Container">
          <tbody>
            {chk === 0 ? (
              BoardRender
            ) : (
              <>
                <h1 className="Win-text neon-orange">Congrats!</h1>
                <h2 className="test Win-text neon-blue">You Won!</h2>
              </>
            )}
          </tbody>
        </table>

        <div className="center">
          <h2>
            {" "}
            Click on get a new pattern if you are unable to solve the existing
            one!
          </h2>
          <button onClick={this.refresh}>Get a new pattern/Play Again</button>
        </div>
      </div>
    );
  }
}

export default Board;
