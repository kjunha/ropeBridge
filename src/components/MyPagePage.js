import React from 'react'
import PropTypes from 'prop-types'
import TitleBar from './homecomp/TitleBar'
import UserInfo from './mypagecomp/UserInfo'
import ProposalPane from './mypagecomp/ProposalPane'
import Footer from './homecomp/Footer'

class MyPagePage extends React.Component {
  render () {
    return(
      <div>
        <TitleBar />
        <UserInfo />
        <ProposalPane />
        <Footer />
      </div>
    );
  }
}

export default MyPagePage;
