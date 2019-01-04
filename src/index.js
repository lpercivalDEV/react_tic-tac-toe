//  ** ~ Wespire Code Challenge - Tic Tac Toe Gameboard ~ ** //

//** Logic**//
// Check List - build the board
//                   - fill box w/user symbol on click
//                   - switch to other user when square's clicked
//                   - clicked squres can't be reclicked
//                   - install mocha test framework
//                   - write test to validate how users alternate
//                   - commit the code to github and send out link
//
/*
           TITLE
    P1 x    |     P2 0
        | ALERT |
    .  __   .  __   .  __   .                  *React Components?*
        x        0        x                         - App/view component
    .  __   .  __   .  __   .                   - Symbol compnents
        0        x        0                        - board component
    .  __   .  __   .  __   .                   - score component
        x        0        0                        - title component
    .  __   .  __   .  __   .                   - win/tie/alert component
    p1 score |  p2 score

*/
//
// ** TO DO/Notes ** //
// Front end only - HTML/CSS/JS
// Look up Mocha and how to write unit tests
// Use react? - yes...no...?
// Keep code dry and add comments!!!
// Have mentor(s) review my code and help me with questions
// Logic out the next possible steps!!!!!!
//        --> win, lose, tie, score keeping, audio, visuals, etc.
// -------------------------------------------------------------------------//

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Square extends React.Component {
  //   constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null,
  // };
//}

  render() {
    return (
      <button className="square" >
          {this.props.symbol}
      </button>
    );
  }


class Board extends React.Component {
    // state = {
    //     board: [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    // };
    // updateSquare(index) {
    //     let newBoard = this.state.board.slice[0];
    //     console.log(newBoard);
    //     newBoard[index] = "x";
    //     this.setState({board: newBoard})
    // }
  renderSquare(symbol) {

    return <Square symbol= {i} />;
        // onclick = {() => this.updateSquare.bind(this)(symbol)
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
          <div className="status">{status}</div>
          <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
          </div>
          <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
          </div>
          <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
          </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
