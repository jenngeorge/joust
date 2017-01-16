import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';

import App from './app/app';
import Header from './header/header';

const Root = ({store}) => {

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
