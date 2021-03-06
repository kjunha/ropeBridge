import React from 'react'
import PropTypes from 'prop-types'
import './UserInfo.css'
import { Link } from 'react-router-dom'

class UserInfo extends React.Component {
  render () {
    return(
      <div id="sidepane" className="ui container">
        <div className="ui inverted circular segment" style={{display:'inline-block', height:'128px', width:'128px', marginLeft:'auto'}}></div>
        <p style={{fontSize:'18pt',fontWeight:'bold'}}>Tourist Name</p>
        <p style={{fontSize:'13pt',textDecoration:'underline'}}><a href="#">Change Password</a></p>
        <p style={{fontSize:'13pt',textDecoration:'underline'}}><Link to="/myguest">My Guests</Link></p>
        <p style={{fontSize:'13pt',textDecoration:'underline'}}><Link to="/catalog">Tour Search</Link></p>

      </div>
    );

  }
}

export default UserInfo;
