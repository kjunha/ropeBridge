import React from 'react'
import PropTypes from 'prop-types'
import './TitleBar.css';
import { Link } from 'react-router-dom'

class TitleBar extends React.Component {
  render () {
    return(
      <div id="titleBar" className="ui dividing header">
        <div style={{display:'inline-block', width:'40%'}} align="left">
            <Link to='/'>
              <button className="ui button" name="logo">Logo</button>
            </Link>
        </div>
        <div style={{display:'inline-block', width:'15%'}}>
          <h1><Link to="/" style={{color:'#000'}}>ropeBridge</Link></h1>
        </div>
        <div style={{display:'inline-block', width:'40%'}} align="right">
          <Link to="/login" className="ui primary button" name="login">Log in</Link>
          <Link href="/signup" className="ui button" name="signup">Sign up</Link>
        </div>
      </div>
    );
  }
}

export default TitleBar;
