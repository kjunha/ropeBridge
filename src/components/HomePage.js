import React from 'react'
import PropTypes from 'prop-types'
import TitleBar from './homecomp/TitleBar'
import Proposal from './homecomp/Proposal'
import Testimonial from './homecomp/Testimonial'
import TopReview from './homecomp/TopReview'
import Footer from './homecomp/Footer'

class HomePage extends React.Component {
  render () {
    return(
      <div>
        <TitleBar />
        <Proposal />
        <Testimonial />
        <TopReview />
        <Footer />
      </div>
    );

  }
}

export default HomePage;
