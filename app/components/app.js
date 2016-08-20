import React, { PropTypes } from 'react';
import DevTools from './dev-tools';

const injectDevTools = () => {
  if (__DEV__ && !window.devToolsExtension) {
    return <DevTools />;
  }
  return null;
};

const App = (props) => (
  <div>
    { props.children }
    { injectDevTools() }
  </div>
);

App.propTypes = {
  children: PropTypes.element,
};

export default App;
