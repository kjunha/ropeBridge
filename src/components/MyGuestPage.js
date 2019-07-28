import React from 'react'
import PropTypes from 'prop-types'
import TitleBar from './homecomp/TitleBar'
import UserInfo from './mypagecomp/UserInfo'
import GuestInfoPane from './myguestcomp/GuestInfoPane'
import Footer from './homecomp/Footer'

class MyGuestPage extends React.Component {
  render () {
    return(
      <div>
        <TitleBar />
        <UserInfo />
        <GuestInfoPane />
        <Footer />
      </div>
    );
  }
}

export default MyGuestPage;
