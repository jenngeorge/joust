import { connect } from 'react-redux';
import { createChallenge } from '../../actions/challenge_actions';
import { fetchGoals } from '../../actions/goal_actions';
import ChallengeForm from './challenge_form';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  goals: state.goals,
  user: state.userDetail
});

const mapDispatchToProps = dispatch => ({
  createChallenge: (challenge) => dispatch(createChallenge(challenge)),
  fetchGoals: () => dispatch(fetchGoals())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeForm);
