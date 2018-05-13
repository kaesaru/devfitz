import React from 'react';
import PropTypes from 'prop-types';


class Header extends React.Component {
  render() {
    // const if needed
    const company = 'The Header goes here'
    // return something from the component that you want to render
    return (
      <div className='Header'>{company}</div>
    )
  }
}

export default Header;