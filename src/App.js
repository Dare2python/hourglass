import React from 'react';
import './App.css';

const Square = props =>
  <button className="square"
    onClick={() => props.handleClick(props.rowNum, props.colNum, props)}>
    {props.value}
  </button>

const Row = props =>
  <div className="matrix-row">
    {props.value.map( (item, index) =>
      <Square
        key={"r"+props.rowNum+"c"+index}
        value={item}
        handleClick={props.handleClick}
        rowNum={props.rowNum}
        colNum={index}
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

  handleClick(rowNum, colNum, item) {
    // const cols = this.state.arr.length();
    // const rows = this.state.arr[0].length();
    console.log(rowNum, colNum, this); //rows, cols)
  }

  render = () =>
    <div className="matrix">
      {this.state.arr.map( (item, index) =>
        <Row
          key={"row"+index}
          value={item}
          handleClick={this.handleClick}
          rowNum={index}
        />
      )}
    </div>
}

const App = () =>
  <div className="App">
  the hourglass
    <Matrix
          //onClick={i => this.handleClick(i)}
    />
  </div>

export default App;
