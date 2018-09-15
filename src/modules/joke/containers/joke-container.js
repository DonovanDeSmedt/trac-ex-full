import { connect } from 'react-redux';
import addMessage from './joke-actions';
import Joke from '../components/joke';

const mapStateToProps = state => ({
  jokes: state.joke.data,
});

const mapDispatchToProps = {
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Joke);
