import React from 'react';
import Datetime from 'react-datetime';

class ChallengeForm extends React.Component {
  constructor(props){
    super(props);

  	this.state = {
      challenger_id: this.props.currentUser.id,
      challengee_id: this.props.user.id || "",
      goal_id: "",
      start_datetime: "",
      end_datetime: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchGoals();
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
    let challenge = this.state;
    if (challenge.challengee_id === ""){
      challenge.challengee_id = this.props.user.id;
    }
		e.preventDefault();
		this.props.createChallenge({challenge})
      .then(this.props.fetchUser(this.props.user.id));
	}


  render(){

    let selectGoal = Object.keys(this.props.goals).map(key => {
      return (
        <div key={key}>
          <input type="radio" name={this.props.goals[key].name}
            value={this.props.goals[key].id}
            checked={this.state.goal_id === `${this.props.goals[key].id}`}
            onChange={this.update("goal_id")}/>
          {this.props.goals[key].name}:
          {this.props.goals[key].description}
        </div>
      );
    });

    return(
      <div className="challenge-form-container">
        <form onSubmit={this.handleSubmit} className="challenge-form">
            <label> You vs. {this.props.user.email}
              <input type="text"
                value={this.state.challengee}
                onChange={this.update("challengee_id")} />
            </label>

            <div className="start-datetimepicker">
              <Datetime value={this.state.start_datetime}
                inputProps={{readOnly:true, placeholder: "Start Date and Time"}}
                closeOnSelect={true}
                onChange={(newStart) => (this.setState({
                  start_datetime: newStart._d
                })
              )}/>
            </div>
            <div className="end-datetimepicker">
              <Datetime value={this.state.end_datetime}
                inputProps={{readOnly:true, placeholder: "Start Date and Time"}}
                closeOnSelect={true}
                onChange={(newEnd) => (this.setState({
                  end_datetime: newEnd._d
                })
              )}/>
          </div>

          {selectGoal}

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ChallengeForm;
