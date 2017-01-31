import React from 'react';
import { Link } from 'react-router';

class UserDetail extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.params.userId);
  }

  componentWillUpdate(nextProps){
    if (nextProps.params.userId !== this.props.params.userId){
      this.props.fetchUser(nextProps.params.userId);
    }
  }

  render(){
    return(
        <div>
          {this.props.user.email}
        </div>
      );
  }
}

export default UserDetail;
