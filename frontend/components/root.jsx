import React from 'react';
import Provider from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app/app';


const Root = ({store}) => {
  let app = App;
  let has = hashHistory;
  debugger
  // return (
  //   <div>
  //     Hi
  //   </div>
  // );
  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/app" component={App}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
