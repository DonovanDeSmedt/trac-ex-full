import { createSelector } from 'reselect';

const filterJokeSelector = createSelector(
  [state => state.joke.data],
  jokes => jokes,
);

export default filterJokeSelector;
