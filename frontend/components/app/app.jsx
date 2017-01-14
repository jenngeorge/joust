import React from 'react';
import { Link } from 'react-router';

const App = ({children}) => {

  return(
      <div>
        Hi I'm App
        {children}
      </div>
    );
};

export default App;
