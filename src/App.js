import React from 'react'
import PropTypes from 'prop-types'
import TitleBar from './components/homecomp/TitleBar'
import Footer from './components/homecomp/Footer'

class App extends React.Component {
  render () {
    return(
      <div>
        <TitleBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
