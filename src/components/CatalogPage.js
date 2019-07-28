import React from 'react'
import PropTypes from 'prop-types'
import TitleBar from './homecomp/TitleBar'
import UserInfo from './mypagecomp/UserInfo'
import CatalogPane from './catalogcomp/CatalogPane'
import Footer from './homecomp/Footer'

class CatalogPage extends React.Component {
  render () {
    return(
      <div>
        <TitleBar />
        <UserInfo />
        <CatalogPane />
        <Footer />
      </div>
    );
  }
}

export default CatalogPage;
