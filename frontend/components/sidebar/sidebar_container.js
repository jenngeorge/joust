import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import Sidebar from './sidebar';

const mapStateToProps = ({users}) => ({
  users
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
