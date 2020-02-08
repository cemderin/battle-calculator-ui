import { connect } from 'react-redux';
import Implementation from './implementation';

const mapStateToProps = (state: any) => ({
  factions: state.factions
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Implementation);