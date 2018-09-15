import React, { Component } from 'react';
import JokeList from './joke-list';
import JokeInput from './joke-input';

class Joke extends Component {
  state = {
    jokes: [],
  };
  handleJokeInput = text => {
    const id = new Date().getTime();
    const jokes = [...this.state.jokes, { id, text }];
    this.setState({ jokes });
  };
  render() {
    return (
      <div>
        <h3>Fill in a joke</h3>
        <JokeInput handleInput={this.handleJokeInput} />
        <hr />
        <h3>Overview jokes</h3>
        <JokeList jokes={this.state.jokes} />
      </div>
    );
  }
}
export default Joke;
