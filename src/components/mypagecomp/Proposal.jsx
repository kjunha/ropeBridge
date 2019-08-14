import React from 'react'
import PropTypes from 'prop-types'
import GuideInfo from './GuideInfo'

class Proposal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:this.props.user.user_name,
      itinerary:this.props.itinerary
    };
  }

  approvalStamp(){
    if (this.state.itinerary.confirmed) {
      return(
        <button className="ui massive green basic button" name="button" style={{pointerEvents:'none'}}>Approved</button>
      );
    } else {
      return(
        <button className="ui massive orange basic button" name="button" style={{pointerEvents:'none'}}>On Progress</button>
      );
    }
  }

  guideSelection(){
    if (this.state.itinerary.offerlist.length > 0){
      if(this.state.itinerary.confirmed) {
        return(
          <div id="tourguide_info" className="ui segment" style={{marginLeft:'5em', marginRight:'5em', padding: '1em'}}>
            <div className="ui grid">
              <div className="two wide column" align="center">
                <div className="ui inverted circular segment" style={{height:'72px', width:'72px', marginLeft:'auto'}}>pic</div>
              </div>
              <div className="six wide column">
                <h3><a href="#">{this.state.itinerary.guide.user_name}</a></h3>
                <p>Review:(Star Raiting) 14 Guests visited<br/>
                <i className="envelope outline icon"></i><a href="#">tourguide@example.com</a></p>
              </div>
              <div className="five wide column">
                <h3>Price</h3>
                <p style={{fontSize:'25pt'}}>{this.state.itinerary.price}$<span style={{fontSize:'15pt'}}>/Tour</span></p>
              </div>
              <div className="three wide column" style={{textAlign:'Right'}}>
                <button className="ui primary button" name="pay" style={{width:'96px',marginBottom: '8px'}}>Pay Guide</button>
                <button className="ui button" name="cancel" style={{width:'96px'}}>Cancel</button>
              </div>
            </div>
          </div>
        );
      } else {
        return(
          <div id="tourguide_list" className="ui segment" style={{marginLeft:'5em', marginRight:'5em', height: '130px', overflow: 'auto'}}>
            {/* Function required for the iteration */}
            {this.state.itinerary.offerlist.map((offers) => {
              return(
                <GuideInfo offer = {offers}/>
              );
            })}
          </div>
        );
      }
    } else {
      return(
        <div className="ui segment" style={{margin: '1em', textAlign: 'center'}}>
          We are waiting for some tourguides attention.
        </div>
      );
    }
  }
  render () {
    const {name} = this.state;
    const {itinerary} = this.state;
    return(
      <div id="proposal" className="ui padded segment">
        <h1>{name}'s Tour'</h1>
        <div className="ui grid">
          <div id="detail_info" className="ten wide column">
            <p>Start Date: {itinerary.start_date} End Date: {itinerary.end_date}</p>
            <p>Group Size: {itinerary.adults} Adults, {itinerary.kids} Children</p>
            <p>Planned Activity:</p>
            <div className="ui segment" style={{margin: '1em', textAlign: 'center'}}>
              {itinerary.activity}
            </div>
          </div>
          <div id="status_view" className="six wide column" align="right">
            {this.approvalStamp()}
          </div>
        </div>
        {this.guideSelection()}
      </div>
    );

  }
}

export default Proposal;
