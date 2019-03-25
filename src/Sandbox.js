import React from 'react'
import PropTypes from 'prop-types'
import {DateInput} from 'semantic-ui-calendar-react';

class Sandbox extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      date: ''
    };
  }

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  render () {
    return(
      <div>
        <form>
          <DateInput
            name="date"
            placeholder="Date"
            value={this.state.date}
            iconPosition="left"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Sandbox;
