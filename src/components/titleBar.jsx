import React from 'react'
import PropTypes from 'prop-types'
import './css/TitleBar.css';

class TitleBar extends React.Component {
  render () {
    return(
      <div id="titleBar" class="ui dividing header">
        <h1>ropeBridge</h1>
      </div>
    );
  }
}

export default TitleBar;
