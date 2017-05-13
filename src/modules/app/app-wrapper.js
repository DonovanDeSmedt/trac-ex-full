import React, { Children } from 'react';
import PropTypes from 'prop-types';

const AppWrapper = props =>
  <div>
    { Children.only(props.children) }
  </div>
;

AppWrapper.propTypes = {
  children: PropTypes.element,
};

export default AppWrapper;
