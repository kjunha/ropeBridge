import React from 'react'
import PropTypes from 'prop-types'

class Login extends React.Component {
  render () {
    return(
      <div id="loginform" className="ui segment" style={{marginTop:'7em', width:'40%', marginLeft:'auto', marginRight:'auto'}}>
        <div className="title" style={{textAlign:'center'}}>
          <h3>Login</h3>
        </div>
        <div className="ui divider" style={{margin:'1em 0em'}}> </div>
        <form className="ui form" action="index.html" method="post">
          <div className="contents" style={{margin:'0% 12%'}}>
            <label>ID</label>
            <input type="text" name="id" placeholder="example@email.com"></input>
            <label>Password</label>
            <input type="text" name="pw" placeholder="Password"></input>
            <div className="ui grid" style={{marginTop:'1.2em'}}>
              <div className="eight wide column" style={{textAlign:'left'}}>
                <a className="ui button" type="submit" name="submit">Sign Up</a>
              </div>
              <div className="eight wide column" style={{textAlign:'right'}}>
                <a href="../html/mypage.html" className="ui button" type="submit" name="submit">Log In</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
