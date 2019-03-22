import React from 'react'
import PropTypes from 'prop-types'
import './css/TopReview.css'

class TopReview extends React.Component {
  render () {
    return(
      <div className="topreviews" style={{margin:'2em 4em'}}>
        <div className="review-title" style={{textAlign:'center', margin: '2em 0em'}}>
          <h1>Top Reviews</h1>
        </div>
        <div className="ui grid">
          <div className="four wide column">
            <div className="row" style={{width:'10em', height:'10em', margin:'auto'}}>
              <div id="review_prof" className="ui circular segment" style={{backgroundColor:'#000000'}}>
              </div>
            </div>
            <div className="stars" style={{textAlign:'center'}}>
              five star
            </div>
          </div>
          <div className="twelve wide column">
            <div className="ui segment" style={{height:'100%'}}>
                review here
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopReview;
