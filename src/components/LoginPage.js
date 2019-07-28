import React from 'react'
import PropTypes from 'prop-types'
import TitleBar from './homecomp/TitleBar'
import Login from './logincomp/Login'
import Footer from './homecomp/Footer'

class LoginPage extends React.Component {
  render () {
    return(
      <div>
        <TitleBar />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
