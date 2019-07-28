import React from 'react'
import PropTypes from 'prop-types'
import Catalog from './Catalog'


class CatalogPane extends React.Component {
  render () {
    return(
      <div id="main" style={{marginTop:'3em', marginLeft:'20%', padding:'3em 1em'}}>
        <div id="search_bar" className="ui segment" style={{backgroundColor:'#c9c9c9'}}>
          <div className="ui grid">
            <div className="thirteen wide column">
              <div className="ui fluid icon input">
                <input type="text" placeholder="Search Keywords"></input>
                <i className="search icon"></i>
              </div>
            </div>
            <div className="three wide column" style={{textAlign: 'right'}}>
              <button className="ui inverted button" name="sort">Sort Options</button>
            </div>
          </div>
        </div>
        <Catalog />
      </div>

    );
  }
}

export default CatalogPane;
