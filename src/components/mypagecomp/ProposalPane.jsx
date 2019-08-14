import React from 'react'
import PropTypes from 'prop-types'
import Proposal from './Proposal'

class ProposalPane extends React.Component {
  render () {
    const itineraries = this.props.data.itineraries;
    return(
      <div id="main" style={{marginTop:'3em', marginLeft:'20%', padding:'3em 1em'}}>
        {itineraries.map((itinerary) => {
          return(
            <Proposal user={this.props.data} itinerary={itinerary}/>
          );
        })}
      </div>
    );
  }
}

export default ProposalPane;
