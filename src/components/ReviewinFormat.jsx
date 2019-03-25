import React from 'react'
import PropTypes from 'prop-types'

class ReviewinFormat extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profile:null,
      star:this.props.star,
      comment:this.props.comment
    }
  }
  render () {
    return(
      <div className="ui grid">
        <div className="four wide column">
          <div className="row" style={{width:'10em', height:'10em', margin:'auto'}}>
            <div id="review_prof" className="ui circular segment" style={{backgroundColor:'#000000'}}>
            </div>
          </div>
          <div className="stars" style={{textAlign:'center'}}>
            {this.state.star}
          </div>
        </div>
        <div className="twelve wide column">
          <div className="ui segment" style={{height:'100%'}}>
              {this.state.comment}
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewinFormat;
