import React from 'react'
import PropTypes from 'prop-types'
import Proposal from './Proposal'

class ProposalPane extends React.Component {
  render () {
    return(
      <div id="main" style={{marginTop:'3em', marginLeft:'20%', padding:'3em 1em'}}>
        <Proposal data={this.props.data}/>
      </div>
    );
  }
}

export default ProposalPane;
