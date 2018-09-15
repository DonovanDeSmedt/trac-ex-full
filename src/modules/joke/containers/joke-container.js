import { connect } from 'react-redux';
import addMessage from './joke-actions';
import JokeList from '../components/joke-list';

const mapStateToProps = state => ({
  jokes: state.joke.data,
});

const mapDispatchToProps = {
  addMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(JokeList);
