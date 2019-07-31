import React from 'react'
import PropTypes from 'prop-types'
import GuideInfo from './GuideInfo'

class Proposal extends React.Component {
  //TODO: create constructor, ready to get props to state
  //TODO: GuideInfo iterator
  render () {
    const {data} = this.props
    const itinerary = data.getItinerary(0)
    return(
      <div id="proposal" className="ui padded segment">
        <h1>{data.user_name}'s Tour'</h1>
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
            <button className="ui massive orange basic button" name="button" style={{pointerEvents:'none'}}>On Progress</button>
          </div>
        </div>
        <div id="tourguide_list" class="ui segment" style={{marginLeft:'5em', marginRight:'5em', height: '130px', overflow: 'auto'}}>
          {/* Function required for the iteration */}
          {itinerary.offerlist.map((offers) => {
            return(
              <GuideInfo offer = {offers}/>
            );
          })}
        </div>
      </div>
    );

  }
}

export default Proposal;
