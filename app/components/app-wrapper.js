import React, { Children, PropTypes } from 'react';

const AppWrapper = props =>
  <div>
    { Children.only(props.children) }
  </div>
;

AppWrapper.propTypes = {
  children: PropTypes.element,
};

export default AppWrapper;
