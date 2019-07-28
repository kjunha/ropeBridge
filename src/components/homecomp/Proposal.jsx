import React from 'react'
import PropTypes from 'prop-types'
import {DateInput} from 'semantic-ui-calendar-react'

class Proposal extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      s_date: '',
      e_date: ''
    };
  }

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
    console.log(name, value);
  }

  render () {
    return(
      <div className="proposal" style={{backgroundColor:'#000000', padding: '3em 0em', marginTop: '5em'}}>
        <div className="ui grey segment" style={{width:'45em', margin:'auto'}}>
          <div className="proposal_title" style={{textAlign:'center', margin:'0em 6em'}}>
            <h2>Travel Plan Proposal</h2>
            <p>You can find local tourguides own your own or they can contact you according to your proposal.</p>
          </div>
          <div className="ui divider" style={{margin:'1em 0em'}}> </div>
          <form className="ui form" action="#" method="post">
              <div className="two fields">
              <div className="field">
                <label>Start date</label>
                  <DateInput
                    dateFormat="YYYY-MM-DD"
                    name="s_date"
                    placeholder="Start"
                    value={this.state.s_date}
                    iconPosition="left"
                    onChange={this.handleChange}
                  />
              </div>
              <div className="field">
                <label>End date</label>
                  <DateInput
                    dateFormat="YYYY-MM-DD"
                    name="e_date"
                    placeholder="End"
                    value={this.state.e_date}
                    iconPosition="left"
                    onChange={this.handleChange}
                  />
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
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="number" name="adult" placeholder="Adults"/>
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input type="number" name="kid" placeholder="kids"/>
                  </div>
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
