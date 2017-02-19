import React from 'react';
import { Link } from 'react-router';
import ChallengeDetailContainer from '../challenges/challenge_detail_container';

class ChallengeDetail extends React.Component {

  componentDidMount(){
    this.props.fetchChallenge(this.props.params.challengeId);
  }

  componentWillUpdate(nextProps){
    if (nextProps.params.challengeId !== this.props.params.challengeId){
      this.props.fetchChallenge(nextProps.params.challengeId);
    }
  }

  render(){
    if (this.props.challenge.challenger){
      let challenge = this.props.challenge;
      return(
        <div className="challenge-container">
          <h2>
            {challenge.challenger.username}
            {" vs. "}
            {challenge.challengee.username}
          </h2>
          <h3>{challenge.goal.name}</h3>
          {challenge.start_datetime}
          {" until "}
          {challenge.end_datetime}
        </div>
      );
    } else {
      return (
        <div>
          Loading Challenge...
        </div>
      );
    }
  }
}

export default ChallengeDetail;
