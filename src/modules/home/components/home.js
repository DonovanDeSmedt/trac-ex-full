import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './home.css';

class Home extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    toggleItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
  };

  componentDidMount() {
    const { getItems } = this.props;
    getItems([{ id: 1, title: 'item 1' }, { id: 2, title: 'item 2' }]);
  }

  render() {
    const { items, toggleItem } = this.props;
    return (
      <div>
        <h1 className={styles.home}>Home</h1>
        <Link to="contact">Contact</Link>
        <ul>
          {items.map((item, idx) => (
            <li
              key={idx}
              onClick={() => toggleItem(item.id)}
              style={item.selected ? { color: 'red' } : {}}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
