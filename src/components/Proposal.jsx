import React from 'react'
import PropTypes from 'prop-types'

class Proposal extends React.Component {
  render () {
    return(
      <div className="proposal" style={{backgroundColor:'#000000', padding: '3em 0em', marginTop: '5em'}}>
        <div className="ui grey segment" style={{width:'45em', margin:'auto'}}>
          <div className="proposal_title" style={{textAlign:'center', margin:'0em 6em'}}>
            <h2>Travel Plan Proposal</h2>
            <p>You can find local tourguides own your own or they can contact you according to your proposal.</p>
          </div>
          <form className="ui form" action="#" method="post">
              <div className="two fields">
              <div className="field">
                <label>Start date</label>
                <input type="text" name="startdate" placeholder="Start"/>
              </div>
              <div className="field">
                <label>End date</label>
                <input type="text" name="enddate" placeholder="End"/>
              </div>
            </div>
            <div className="field">
              <label>Activity</label>
              <input type="text" name="activity" placeholder="Activity"/>
            </div>
            <div className="field">
              <label>Number of Group</label>
              <div className="two fields">
                <div className="field">
                  <input type="text" name="adult" placeholder="Adults"/>
                </div>
                <div className="field">
                  <input type="text" name="kid" placeholder="kids"/>
                </div>
              </div>
            </div>
            <div className="submit_btn" style={{textAlign:'right'}}>
              <button className="ui button" type="submit" name="submit">Publish Proposal</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Proposal;
