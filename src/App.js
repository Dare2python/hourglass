import React from 'react';
import './App.css';

const Square = (props) =>
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>

class Matrix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
    };
  }

  renderSquare = (i) =>
      <Square
        value={this.state.squares[i]}
        //onClick={() => this.onClick(i)}
      />

  render = () =>
    <div>
      <div className="matrix-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
    </div>
}

const App = () =>
  <div className="App">
  the hourglass
    <div className="matrix">
      <Matrix
            //onClick={i => this.handleClick(i)}
      />
    </div>
  </div>

export default App;
