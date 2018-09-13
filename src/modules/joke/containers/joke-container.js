import { connect } from 'react-redux';
import { getJokeRequest, addMessage } from './joke-actions';
import JokeList from '../components/joke-list';
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

export default connect(mapStateToProps, mapDispatchToProps)(JokeList);
