import { connect } from 'react-redux';
import { fetchChallenge } from '../../actions/challenge_actions';
import ChallengeDetail from './challenge_detail';

const mapStateToProps = (state) => ({
  challenge: state.challengeDetail,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchChallenge: (id) => dispatch(fetchChallenge(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeDetail);
