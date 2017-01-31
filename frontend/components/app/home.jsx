import React from 'react';
import { Link } from 'react-router';

import SidebarContainer from '../sidebar/sidebar_container';

const Home = ({children}) => {

  return(
    <div className="home-container">
      <SidebarContainer />

      <div className="view-container">
        {children}
      </div>
    </div>

  );
};

export default Home;
