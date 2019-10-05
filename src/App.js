import React from 'react';
import './App.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Matrix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(3).fill(0)
    };
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        //onClick={() => this.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="matrix-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
    the hourglass
      <div className="matrix">
        <Matrix
              //onClick={i => this.handleClick(i)}
        />
      </div>
    </div>
  );
}

export default App;
