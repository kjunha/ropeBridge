import React from 'react'
import PropTypes from 'prop-types'
import './HomeStyle.css'
import { Link } from 'react-router-dom'

class TitleBar extends React.Component {
  render () {
    return(
      <div className="titleBar">
        <div className="logo">
          <img src={"/images/logo_white.png"}/>
          <span><Link to="/">Ropebridge</Link></span>
        </div>
        <div className="titleMenu">
          <div class="item">
            <span>Home</span>
          </div>
          <div class="item">
            <span>MyPage</span>
          </div>
          <div class="item">
            <span>MyGuest</span>
          </div>
          <div class="item">
            <span>Tour Search</span>
          </div>
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
