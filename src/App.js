import React from 'react';
import './App.css';

const Square = props =>
  <button className="square" onClick={props.onClick}>
    {props.value}
  </button>

const Row = props =>
  <div className="matrix-row">
    {props.value.map(item =>
      <Square
        value={item}
        //onClick={() => this.onClick(i)}
      />
    )}
  </div>

class Matrix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
      ]
    };
  }

  render = () =>
    <div>
      {this.state.arr.map(item =>
        <Row
          value={item}
          //onClick={() => this.onClick(i)}
        />
      )}
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
