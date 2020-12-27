import React from 'react';

import logo from './logo.svg';
import './App.css';

import Box from '../src/Component/Box';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: 'yunbo',
      age: 25,
    };
  }

  componentDidMount() {
    this.setState = {
      name: 'hi',
      count: 10,
    };
    console.log('did mount');
  }
  componentDidUpdate() {
    console.log('did update');
  }
  componentWillUnmount() {
    console.log('will unmount');
  }
  onPlusButtonClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  onMinusButtonClick = () => {
    this.setState((prevState) => {
      //버그가 낮은 방식
      return {
        ...prevState,
        count: prevState.count - 1,
      };
    });
    // this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Box data={this.state}></Box>

          <span className="count-text">{this.state.count}</span>
          <button onClick={this.onPlusButtonClick}>+</button>
          <button onClick={this.onMinusButtonClick}>-</button>
        </header>
      </div>
    );
  }
}

export default App;
