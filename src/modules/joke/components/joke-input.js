import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class JokeInput extends Component {
  state = {};

  handleSubmit = () => {
    // do something with the input text when button is clicked
    // ...
    // make input field empty after submit
    // ...
  };
  handleInput = e => {
    // do somehting when input changes
  };
  render() {
    return (
      <div>
        <input onChange={this.handleInput} />
        <button onClick={this.handleSubmit}>Add joke</button>
      </div>
    );
  }
}
JokeInput.propTypes = {};
export default JokeInput;
