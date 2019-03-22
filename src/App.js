import React from 'react'
import PropTypes from 'prop-types'
import TitleBar from './components/TitleBar'
import Proposal from './components/Proposal'
import Testimonial from './components/Testimonial'

class App extends React.Component {
  render () {
    return(
      <div>
        <TitleBar />
        <Proposal />
        <Testimonial />
      </div>
    );
  }
}

export default App;
