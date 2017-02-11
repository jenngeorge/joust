import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import UserForm from './user_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUser: (data) => dispatch(updateUser(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
