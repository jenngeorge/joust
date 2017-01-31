import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = ({session}) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
