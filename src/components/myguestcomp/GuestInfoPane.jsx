import React from 'react'
import PropTypes from 'prop-types'
import GuestInfo from './GuestInfo'

class GuestInfoPane extends React.Component {
  render () {
    return(
      <div id="main" style={{marginTop:'3em', marginLeft:'20%', padding:'3em 1em'}}>
        <div id="daily_tour" style={{marginLeft: '5%', marginRight: '5%'}}>
          <h2>MMM dd, yyyy</h2>
          <div className="ui horizontal divider"><i className="calendar alternate outline icon"></i></div>
            <GuestInfo />
        </div>
      </div>
    );
  }
}

export default GuestInfoPane;
