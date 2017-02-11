import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserDetail from './user_detail';

const mapStateToProps = (state) => ({
  user: state.userDetail,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
