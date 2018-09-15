import React from 'react';
import PropTypes from 'prop-types';

const JokeList = ({ jokes }) =>
  jokes.map(item => <div key={item.id}>{item.text}</div>);

JokeList.propTypes = {
  jokes: PropTypes.array.isRequired,
};
export default JokeList;
