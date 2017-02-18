import React from 'react';
import Datetime from 'react-datetime';

class UserForm extends React.Component {
  constructor(props){
    super(props);

  	this.state = {
      username: this.props.currentUser.username || "",
      first_name: this.props.currentUser.first_name || "",
      last_name: this.props.currentUser.last_name || "",
      email: this.props.currentUser.email
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
    let user = this.state;
		e.preventDefault();

		this.props.updateUser({user});
	}


  render(){

    return(
      <div className="user-form-container">
        <form onSubmit={this.handleSubmit} className="user-form">
            <label> Username
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")} />
            </label>

            <label> First Name
              <input type="text"
                value={this.state.first_name}
                onChange={this.update("first_name")} />
            </label>

            <label> Last Name
              <input type="text"
                value={this.state.last_name}
                onChange={this.update("last_name")} />
            </label>

            <label> Email
              <input type="text"
                value={this.state.email}
                onChange={this.update("email")} />
            </label>

          <button><input type="submit" value="Submit" /></button>
        </form>
      </div>
    );
  }
}

export default UserForm;
