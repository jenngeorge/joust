import React from 'react';
import { Link } from 'react-router';

import Header from '../header/header';

const App = ({children}) => {

  return(
    <div>
      <Header />
      hi I'm App
      {children}
    </div>
  );
};

export default App;
