import React from 'react'
import PropTypes from 'prop-types'
import './HomeStyle.css'

class Footer extends React.Component {
  render () {
    return(
      <div id="footer" className="footer">
        <a href="#">Move Top | </a>
        <a href="#">Contact us | </a>
        <a href="#">One more item</a>
      </div>
    );
  }
}

export default Footer;
