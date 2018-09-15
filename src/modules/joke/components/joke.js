import React, { Component } from 'react';
import JokeList from './joke-list';
import JokeInput from './joke-input';

class Joke extends Component {
  handleJokeInput = text => {
    // handle input from JokeInput component
  };
  render() {
    return (
      <div>
        <h3>Fill in a joke</h3>
        <JokeInput />
        <hr />
        <h3>Overview jokes</h3>
        <JokeList />
      </div>
    );
  }
}
export default Joke;
