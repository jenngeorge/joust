import React from 'react';
import { Link } from 'react-router';
import ChallengeFormContainer from '../challenges/challenge_form_container';

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
    let receivedChallenges, givenChallenges;
    if (this.props.user.received_challenges && this.props.user.given_challenges) {
      receivedChallenges = this.props.user.received_challenges
      .map(challenge => (
        <div key={challenge.id}>
          Challenged by: {challenge.challenger_id}
          Goal: {challenge.goal_id}
          Start: {challenge.start_datetime}
          End: {challenge.end_datetime}
        </div>
      ));

      givenChallenges = this.props.user.given_challenges
        .map(challenge => (
          <div key={challenge.id}>
            Challenged: {challenge.challengee_id}
            Goal: {challenge.goal_id}
            Start: {challenge.start_datetime}
            End: {challenge.end_datetime}
          </div>
        ));
    }


    return(
        <div>
          {this.props.user.email}
          <ChallengeFormContainer />

        <h3>Challenges Made</h3>
        {givenChallenges}

        <h3>Challenges Received</h3>
        {receivedChallenges}
        </div>
      );
  }
}

export default UserDetail;
