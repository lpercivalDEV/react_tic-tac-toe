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
let clickCon = () =>
         props.symbol !== " " ?  null : props.onClick();

    return(
        <button className="square" onClick = {clickCon}>
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
            this.checkWin(grid);

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

//Win Logic

//conditional  3 rows, 3 columns, or 2 diagonals
// win alert, tells which symbol won
// fired after each clicked

//Rows
//  0, 1,2
// 3, 4, 5
// 6, 7, 8

//Columns
// 0, 3, 6
// 1, 4, 7
// 2, 5, 8

//Diagonals
// 0, 4, 8
// 2, 4, 6

 checkWin(grid) {
     //rows
     this.compare(grid[0], grid[1], grid[2]);
     this.compare(grid[3], grid[4], grid[5]);
     this.compare(grid[6], grid[7], grid[8]);

     //Columns
     this.compare(grid[0], grid[3], grid[6]);
     this.compare(grid[1], grid[4], grid[7]);
     this.compare(grid[2], grid[5], grid[8]);

     //Diagonals
     this.compare(grid[0], grid[4], grid[8]);
     this.compare(grid[2], grid[4], grid[6]);


}


compare(x, y, z) {
         if (x !== " " && y !== " " && z !== " " && x == y && y == z) {
             alert("winner");
         }

//     if (grid[0] === grid[1] && grid[1] === grid[2]) {
//         alert("Winner")
// }
    // console.log(grid);
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
