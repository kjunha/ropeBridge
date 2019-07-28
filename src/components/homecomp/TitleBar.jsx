import React from 'react'
import PropTypes from 'prop-types'
import './TitleBar.css';

class TitleBar extends React.Component {
  render () {
    return(
      <div id="titleBar" className="ui dividing header">
        <div style={{display:'inline-block', width:'40%'}} align="left">
          <button className="ui button" name="logo">Logo</button>
        </div>
        <div style={{display:'inline-block', width:'15%'}}>
          <h1><a href="../html/index.html" style={{color:'#000'}}>ropeBridge</a></h1>
        </div>
        <div style={{display:'inline-block', width:'40%'}} align="right">
          <a href="../html/login.html" className="ui primary button" name="login">Log in</a>
          <a href="../html/signup.html" className="ui button" name="login">Sign up</a>
        </div>
      </div>
    );
  }
}

export default TitleBar;
