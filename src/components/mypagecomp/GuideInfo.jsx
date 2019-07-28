import React from 'react'
import PropTypes from 'prop-types'

class GuideInfo extends React.Component {
  render () {
    return(
      <div id="tourguide_info" className="ui segment" style={{width:'100%', padding: '1em'}}>
        <div className="ui grid">
          <div className="two wide column" align="center">
            <div className="ui inverted circular segment" style={{height:'72px', width:'72px', marginLeft:'auto'}}>pic</div>
          </div>
          <div className="six wide column">
            <h3><a href="#">Leon May</a></h3>
            <p>Review:(Star Raiting) 14 Guests visited<br></br>
              <i className="envelope outline icon"></i><a href="#">tourguide@example.com</a></p>
          </div>
          <div className="five wide column">
            <h3>Price</h3>
            <p style={{fontSize:'25pt'}}>75$<span style={{fontSize:'15pt'}}>/Tour</span></p>
          </div>
          <div className="three wide column" style={{textAlign:'right'}}>
            <button className="ui primary button" name="approve" style={{width:'96px', marginBottom: '8px'}}>Approve</button>
            <button className="ui button" name="decline" style={{width:'96px'}}>Decline</button>
          </div>
        </div>
      </div>
    );

  }
}

export default GuideInfo;
