import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './home.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.home}>Home</h1>
        <Link to="contact">Contact</Link>
      </div>
    );
  }
}

export default HomePage;
