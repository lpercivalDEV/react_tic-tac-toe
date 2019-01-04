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
    .  __   .  __   .  __   .                  *Game Parts?*
        x        0        x                         - App/view
    .  __   .  __   .  __   .                   - Symbols
        0        x        0                        - board component
    .  __   .  __   .  __   .                   - score component  --> later
        x        0        0                        - title/styling --> later
    .  __   .  __   .  __   .                   - win/tie checker --> later
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

//function component since only renders and doesn't have own state
function Square(props) {
    return(
        <button className="square" onClick = {props.onClick}>
            {props.symbol}
        </button>
            )
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: Array(9).fill(" "),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const grid = this.state.grid.slice();
        grid[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            grid: grid,
            xIsNext: !this.state.xIsNext,
            });
    }

  renderSquare(i) {
    return (<Square
        symbol = {this.state.grid[i]}
        onClick = { () => this.handleClick(i)}
            />
    );
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? "X" : "O");

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




















//First attempt   --> have empty array and then update state to render values in squares - hit issue with Board component. Starting fresh...above.
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
//
//
// class Square extends React.Component {
//   //   constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     value: null,
//   // };
// //}
//
//   render() {
//     return (
//       <button className="square" >
//           {this.props.symbol}
//       </button>
//     );
//   }
//
//
// class Board extends React.Component {
//     // state = {
//     //     board: [" ", " ", " ", " ", " ", " ", " ", " ", " "]
//     // };
//     // updateSquare(index) {
//     //     let newBoard = this.state.board.slice[0];
//     //     console.log(newBoard);
//     //     newBoard[index] = "x";
//     //     this.setState({board: newBoard})
//     // }
//   renderSquare(symbol) {
//
//     return <Square symbol= {i} />;
//         // onclick = {() => this.updateSquare.bind(this)(symbol)
//   }
//
//   render() {
//     const status = 'Next player: X';
//
//     return (
//       <div>
//           <div className="status">{status}</div>
//           <div className="board-row">
//               {this.renderSquare(0)}
//               {this.renderSquare(1)}
//               {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//               {this.renderSquare(3)}
//               {this.renderSquare(4)}
//               {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//               {this.renderSquare(6)}
//               {this.renderSquare(7)}
//               {this.renderSquare(8)}
//           </div>
//       </div>
//     );
//   }
// }
//
// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//           <div className="game-board">
//               <Board />
//           </div>
//           <div className="game-info">
//               <div>{/* status */}</div>
//               <ol>{/* TODO */}</ol>
//           </div>
//       </div>
//     );
//   }
// }
//
// // ========================================
//
// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );
