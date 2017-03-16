import React from 'react';
import { Link } from 'react-router';
import ChallengeFormContainer from '../challenges/challenge_form_container';
import UserFormContainer from './user_form_container';
import ChallengePending from '../challenges/challenge_pending';

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

  displayChallenges(challenges){
    let mapped = challenges.map(challenge => (
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

    return mapped;
  }

  displayPendingChallenges(challenges){
    let mapped = challenges.map(challenge => (
      <ChallengePending
        challenge={challenge}
        updateChallenge={this.props.updateChallenge} />
    ));

    return mapped;
  }

  render(){
    let challengesInProgress, challengesComplete, challengesPending;
    if (this.props.user.challenges_in_progress || this.props.user.challenges_complete) {
      challengesInProgress = this.displayChallenges(this.props.user.challenges_in_progress);
      challengesComplete = this.displayChallenges(this.props.user.challenges_complete);
    }

    if (this.props.user.id === this.props.currentUser.id){
      challengesPending =  (<div>
        <h3>Pending Challenges</h3>
        {this.displayPendingChallenges(this.props.user.challenges_pending)}
      </div>);
    }


    return(
      <div className="user-detail-container">
        <section className="user-info">
          <h2>{this.props.user.username}</h2>
          {this.props.user.email}
        </section>

        {this.userActionOptions()}

        {challengesPending}

        <h3>Challenges in Progress</h3>
        {challengesInProgress}

        <h3>Complete Challenges</h3>
        {challengesComplete}
      </div>
    );
  }
}

export default UserDetail;
