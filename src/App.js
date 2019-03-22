import React from 'react'
import PropTypes from 'prop-types'
import TitleBar from './components/TitleBar'
import Proposal from './components/Proposal'
import Testimonial from './components/Testimonial'
import TopReview from './components/TopReview'
import Footer from './components/Footer'

class App extends React.Component {
  render () {
    return(
      <div>
        <TitleBar />
        <Proposal />
        <Testimonial />
        <TopReview />
        <Footer/>
      </div>
    );
  }
}

export default App;
