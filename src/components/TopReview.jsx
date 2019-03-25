import React from 'react'
import PropTypes from 'prop-types'
import './css/TopReview.css'
import ReviewinFormat from'./ReviewinFormat'

class TopReview extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render () {
    return(
      <div className="topreviews" style={{margin:'2em 4em'}}>
        <div className="review-title" style={{textAlign:'center', margin: '2em 0em'}}>
          <h1>Top Reviews</h1>
        </div>
          <ReviewinFormat profile={null} star={3} comment={"good"} />
      </div>
    );
  }
}

export default TopReview;
