import React from 'react'
import PropTypes from 'prop-types'
import TitleBar from './homecomp/TitleBar'
import Footer from './homecomp/Footer'

class MyGuestPage extends React.Component {
  render () {
    return(
      <div>
        <TitleBar />
        <Footer />
      </div>
    );
  }
}

export default MyGuestPage;
