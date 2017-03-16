import React from 'react';
import { Link } from 'react-router';

const ChallengePending = (props) => {

  const handleReject = (e) => {
    e.preventDefault();
    let challenge = {status: "REJECTED"};
    props.updateChallenge(props.challenge.id, {challenge});
  };

  const handleAccept = (e) => {
    e.preventDefault();
    let challenge = {status: "IN_PROGRESS"};
    props.updateChallenge(props.challenge.id, {challenge});
  };


  return(
    <div className="pending-challenge-container">
      <div className="challenge-item" key={props.challenge.id}>
        <div className="challenge-item-info">
          Challenged: {props.challenge.challengee.username}
          " | "
          Goal: {props.challenge.goal.name}
        </div>
        Start: {props.challenge.start_datetime}
        End: {props.challenge.end_datetime}
      </div>
      <button onClick={handleReject}>Reject</button>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default ChallengePending;
