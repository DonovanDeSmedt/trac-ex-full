import { connect } from 'react-redux';
import { getJokeRequest, addMessage } from './joke-actions';
import Joke from '../components/joke';
import filterJokeSelector from './joke-selector';

const mapStateToProps = state => ({
  jokes: filterJokeSelector(state),
  isLoading: state.joke.isLoading,
  error: state.joke.error,
});

const mapDispatchToProps = {
  getJokeRequest,
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Joke);
