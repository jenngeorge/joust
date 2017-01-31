import React from 'react';
import { Link } from 'react-router';

import UserIndex from './user_index';

class Sidebar extends React.Component{

    componentDidMount(){
      this.props.fetchUsers();
    }

    render (){
      return(
        <div className="sidebar-container">
          <UserIndex users={this.props.users}/>
        </div>
      );

    }

}


export default Sidebar;
