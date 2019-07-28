import React from 'react'
import PropTypes from 'prop-types'

class Catalog extends React.Component {
  render () {
    return(
      <div id="catalog_search" className="ui padded segment">
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
        <div id="apply_waitlist" className="ui grid">
          <div className="ui fourteen wide column" align="left">
            <h3>(number) Tourguide(s) are waiting</h3>
          </div>
          <div className="two wide column" align="right">
            <button className="ui primary button" name="apply" style={{width:'96px', marginBottom: '8px'}}><i className="circle outline icon"></i><br></br>Apply</button>
          </div>
        </div>
      </div>
    );

  }
}

export default Catalog;
