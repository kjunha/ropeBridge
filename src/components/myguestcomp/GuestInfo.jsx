import React from 'react'
import PropTypes from 'prop-types'

class GuestInfo extends React.Component {
  render () {
    return(
      <div id="single_tour" className="ui segment" style={{paddingRight:'3em'}}>
        <div className="ui grid">
          <div className="two wide column" align="center">
            <div className="ui inverted circular segment" style={{height:'72px', width:'72px', marginLeft:'auto'}}>pic</div>
          </div>
          <div className="four wide column">
            <h3>Guest Name</h3>
            <p>MMM,dd yyyy to MMM,dd yyyy
            <br></br>00/Adults, 00/Children</p>
            <p>Status:</p>
            <button className="ui orange basic button" name="status" style={{pointerEvents:'none'}}>On Progress</button>
          </div>
          <div className="eight wide column">
            <div className="ui horizontal divider">
                <h4>Planned Activity</h4>
            </div>
            <div id="proposed_activity" className="ui segment">
              "user input text, list and list"
            </div>
            <div id="price_tag" className="ui two column grid">
              <div className="column" align="left">
                <p style={{fontSize:'18pt'}}>Price: 75$<span style={{fontSize:'12pt'}}>/Tour</span></p>
              </div>
              <div className="column" align="right">
                <button className="ui green button" name="change">negotiate</button>
              </div>
            </div>
          </div>
          <div className="two wide column" align="center">
            <button className="ui primary button" name="comment" style={{width:'96px', margin:'8px'}}>Comment</button>
            <br></br><button className="ui button" name="cancel" style={{width:'96px', margin:'8px'}}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestInfo;
