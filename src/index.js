import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import MyGuestPage from './components/MyGuestPage'
import MyPagePage from './components/MyPagePage'
import CatalogPage from './components/CatalogPage'


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/mypage" component={MyPagePage} />
      <Route path="/myguest" component={MyGuestPage} />
      <Route path="/catalog" component={CatalogPage} />
    </div>
  </Router>,
  document.getElementById('root')
);
