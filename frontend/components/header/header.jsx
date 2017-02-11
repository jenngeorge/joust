import React from 'react';
import { Link, withRouter } from 'react-router';

class Header extends React.Component{
  constructor(){
    super();

    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout(){
    this.props.signout().then(this.props.router.replace("/"));
  }



  render(){
    let sessionButtons = () => {
      if (this.props.session.currentUser){
        return(
          <div className="signout-button">
            <button onClick={this.handleSignout}>Sign Out</button>
            <Link to={`/users/${this.props.session.currentUser.id}`}>
              Me
            </Link>
          </div>
        );
      } else {
        return(
          <div className="signin-buttons">
            <Link to="/signin">Sign in</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        );
      }
    };

    return(
        <div className="nav-container">
          {sessionButtons()}
        </div>
      );
  }

}

export default withRouter(Header);
