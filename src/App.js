import React, { Component } from 'react';
import './App.css';

const doIncrement = (prevState) => ({
  counter: prevState.counter + 1,
});

const doDecrement = (prevState) => ({
  counter: prevState.counter - 1,
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement() {
    this.setState(doIncrement);
  }

  onDecrement() {
    this.setState(doDecrement);
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <h1>My Counter</h1>
        <p>{counter}</p>

        <button
          type="button"
          onClick={this.onIncrement}
        >
          Increment
        </button>

        <button
          type="button"
          onClick={this.onDecrement}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
