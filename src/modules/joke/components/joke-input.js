import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class JokeInput extends Component {
  state = {
    text: '',
  };
  handleSubmit = () => {
    this.props.handleInput(this.state.text);
    this.setState({ text: '' });
  };
  handleInput = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div>
        <input onChange={this.handleInput} value={this.state.text} />
        <button onClick={this.handleSubmit}>Add joke</button>
      </div>
    );
  }
}
JokeInput.propTypes = {
  handleInput: PropTypes.func.isRequired,
};
export default JokeInput;
