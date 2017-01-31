import React from 'react';
import { Link, withRouter } from 'react-router';

class Header extends React.Component{
  constructor(){
    super();

    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout(){
    this.props.signout();
  }



  render(){
    let sessionButtons = () => {
      if (this.props.session.currentUser){
        return(
          <div className="session-buttons">
            <button onClick={this.handleSignout}>Sign Out</button>
          </div>
        );
      }
    }

    return(
        <div className="nav-container">
          {sessionButtons()}
        </div>
      );
  }

}

export default withRouter(Header);
