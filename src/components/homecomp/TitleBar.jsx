import React from 'react'
import PropTypes from 'prop-types'
import './HomeStyle.css'
import { Link } from 'react-router-dom'

class TitleBar extends React.Component {
  render () {
    return(
      <div className="titleBar">
        <div className="logo">
          <img
            src={"/images/logo_white.png"}
            style={{flex:'1', maxWidth:'10%', marginRight:'1em'}}/>
          <Link to='/' style={{flex:1, fontSize:'18pt', color:'#fff', margin:'auto'}}>
            Ropebridge
          </Link>
        </div>
        <div className="titleMenu">
          <span>Home</span>
          <span>My page</span>
          <span>My Guest</span>
          <span>Tour Search</span>
        </div>
        <div className="userstat">
          <Link to="/login" className="ui primary button" name="login">Log in</Link>
          <Link href="/signup" className="ui button" name="signup">Sign up</Link>
        </div>
      </div>
    );
  }
}

export default TitleBar;
