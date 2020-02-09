import { connect } from 'react-redux';
import Implementation from './implementation';

const mapStateToProps = (state: any) => ({
    lists: state.lists
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Implementation);