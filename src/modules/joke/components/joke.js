import React, { Component } from 'react';

class Joke extends Component {
  state = {
    joke: '',
  };
  render() {
    return (
      <div>
        <div>
          <h2>Fill in a joke</h2>
          <input onChange={e => this.setState({ joke: e.target.value })} />
          <hr />
          <h3>Joke </h3>
          <div>{this.state.joke}</div>
        </div>
      </div>
    );
  }
}
export default Joke;
