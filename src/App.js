import React from 'react';
import './App.css';

const Square = props =>
  <button className="square"
    style={{backgroundColor:props.value[1]===1?'LightCyan':'White'}}
    onMouseEnter={() => props.handleHover(props.rowNum, props.colNum)}>
    {props.value[0]}
  </button>

const Row = props =>
  <div className="matrix-row">
    {props.value.map( (item, index) =>
      <Square
        key={"r"+props.rowNum+"c"+index}
        value={item}
        handleHover={props.handleHover}
        rowNum={props.rowNum}
        colNum={index}
      />
    )}
  </div>

const INITIAL_ARR = [
      [[1,0], [1,0], [1,0], [0,0], [0,0], [0,0]],
      [[0,0], [1,0], [0,0], [0,0], [0,0], [0,0]],
      [[1,0], [1,0], [1,0], [0,0], [0,0], [0,0]],
      [[0,0], [0,0], [2,0], [4,0], [4,0], [0,0]],
      [[0,0], [0,0], [0,0], [2,0], [0,0], [0,0]],
      [[0,0], [0,0], [1,0], [2,0], [4,0], [0,0]]
    ];

class Matrix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: JSON.parse(JSON.stringify(INITIAL_ARR)),
      hsum: 0
    };
  }

  handleHover = (rowNum, colNum) => 
    this.setState( (state, props) => {
      const a = JSON.parse(JSON.stringify(INITIAL_ARR));

      let s = a[rowNum][colNum][0];
      a[rowNum][colNum][1]=1;
  
      try {
        s += a[rowNum][colNum+1][0];
        a[rowNum][colNum+1][1]=1;
      }catch(e){}

      try {
        s += a[rowNum][colNum+2][0];
        a[rowNum][colNum+2][1]=1;
      }catch(e){}

      try {
        s += a[rowNum+1][colNum+1][0];
        a[rowNum+1][colNum+1][1]=1;
      }catch(e){}

      try {
        s += a[rowNum+2][colNum][0];
        a[rowNum+2][colNum][1]=1;
      }catch(e){}

      try {
        s += a[rowNum+2][colNum+1][0];
        a[rowNum+2][colNum+1][1]=1;
      }catch(e){}

      try {
        s += a[rowNum+2][colNum+2][0];
        a[rowNum+2][colNum+2][1]=1;
      }catch(e){}

      return {
        arr: a,
        hsum: s
      };
    });

  render = () =>
    <div className="matrix">
      {this.state.arr.map( (item, index) =>
        <Row
          key={"r"+index}
          value={item}
          handleHover={(rowNum, colNum)=>this.handleHover(rowNum, colNum)}
          rowNum={index}
        />
      )}
      <h4>Hourglass Sum={this.state.hsum}</h4>
    </div>
}

const App = () =>
  <div className="App">
    <h1>the hourglass</h1>
    <Matrix/>
  </div>

export default App;
