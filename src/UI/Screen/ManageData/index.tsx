import { connect } from 'react-redux';
import Implementation from './implementation';
import { setFactions } from '../../../store/actions';

const mapStateToProps = (state: any) => ({
  factions: state.factions
});

const mapDispatchToProps = (dispatch: any) => ({
  setFactions: (factions: Array<any>) => dispatch(setFactions(factions))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Implementation);