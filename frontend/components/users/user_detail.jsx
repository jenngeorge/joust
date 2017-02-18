import React from 'react';
import { Link } from 'react-router';
import ChallengeFormContainer from '../challenges/challenge_form_container';
import UserFormContainer from './user_form_container';

class UserDetail extends React.Component {

  componentDidMount(){
    this.props.fetchUser(this.props.params.userId);
  }

  componentWillUpdate(nextProps){
    if (nextProps.params.userId !== this.props.params.userId){
      this.props.fetchUser(nextProps.params.userId);
    }
  }

  userActionOptions(){
    if (this.props.user.id !== this.props.currentUser.id){
      return <ChallengeFormContainer />;
    } else {
      return <UserFormContainer />;
    }
  }

  render(){
    let receivedChallenges, givenChallenges;
    if (this.props.user.received_challenges && this.props.user.given_challenges) {
      receivedChallenges = this.props.user.received_challenges
      .map(challenge => (
        <div className="challenge-item" key={challenge.id}>
          <div className="challenge-item-info">
            Challenged by: {challenge.challenger.username}
            {"   |   "}
            Goal: {challenge.goal.name}
          </div>
          Start: {challenge.start_datetime}
          End: {challenge.end_datetime}
        </div>
      ));

      givenChallenges = this.props.user.given_challenges
        .map(challenge => (
          <div className="challenge-item" key={challenge.id}>
            <div className="challenge-item-info">
              Challenged: {challenge.challengee.username}
              " | "
              Goal: {challenge.goal.name}
            </div>
            Start: {challenge.start_datetime}
            End: {challenge.end_datetime}
          </div>
        ));
    }




    return(
      <div className="user-detail-container">
        <section className="user-info">
          <h2>{this.props.user.username}</h2>
          {this.props.user.email}
        </section>


        {this.userActionOptions()}

        <h3>Challenges Made</h3>
        {givenChallenges}

        <h3>Challenges Received</h3>
        {receivedChallenges}
      </div>
    );
  }
}

export default UserDetail;
