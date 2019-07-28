import React from 'react'
import PropTypes from 'prop-types'
import './Testimonial.css'

class Testimonial extends React.Component {
  render () {
    return(
      <div className="testimonial" style={{margin:'2em 4em'}}>
        <div className="testimonial_title" style={{textAlign:'center', margin: '2em 0em'}}>
          <h1>What is ropeBridge?</h1>
        </div>
        <div className="ui three column grid">
          <div className="column" style={{textAlign:'center'}}>
            <div id="tstm_box" className="ui segment">
              <div id="img"style={{backgroundColor:'#000000'}}></div>
            </div>
            <p>about us 1</p>
          </div>
          <div className="column" style={{textAlign:'center'}}>
            <div id="tstm_box" className="ui segment">
              <div id="img" style={{backgroundColor:'#000000'}}></div>
            </div>
            <p>about us 2</p>
          </div>
          <div className="column" style={{textAlign:'center'}}>
            <div id="tstm_box" className="ui segment">
              <div id="img"style={{backgroundColor:'#000000'}}></div>
            </div>
            <p>about us 3</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
