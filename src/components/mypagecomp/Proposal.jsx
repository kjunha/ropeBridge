import React from 'react'
import PropTypes from 'prop-types'
import GuideInfo from './GuideInfo'

class Proposal extends React.Component {
  render () {
    return(
      <div id="proposal" className="ui padded segment">
        <h1>Your Tour Title (id's trip #1)</h1>
        <div className="ui grid">
          <div id="detail_info" className="ten wide column">
            <p>Start Date: MMM,dd yyyy End Date: MMM,dd yyyy</p>
            <p>Group Size: 00/Adults, 00/Children</p>
            <p>Planned Activity:</p>
            <div className="ui segment" style={{margin: '1em', textAlign: 'center'}}>
              "user input text, list and list"
            </div>
          </div>
          <div id="status_view" className="six wide column" align="right">
            <button className="ui massive orange basic button" name="button" style={{pointerEvents:'none'}}>On Progress</button>
          </div>
        </div>
        <div id="tourguide_list" class="ui segment" style={{marginLeft:'5em', marginRight:'5em', height: '130px', overflow: 'auto'}}>
          <GuideInfo />
        </div>
      </div>
    );

  }
}

export default Proposal;
