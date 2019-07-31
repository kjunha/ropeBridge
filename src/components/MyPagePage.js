import React from 'react'
import PropTypes from 'prop-types'
import TitleBar from './homecomp/TitleBar'
import UserInfo from './mypagecomp/UserInfo'
import ProposalPane from './mypagecomp/ProposalPane'
import Footer from './homecomp/Footer'
import getTesting from './System'

class MyPagePage extends React.Component {
  render () {
    const user1 = getTesting()
    return(
      <div>
        <TitleBar />
        <UserInfo />
        <ProposalPane data={user1} />
        <Footer />
      </div>
    );
  }
}

export default MyPagePage;
