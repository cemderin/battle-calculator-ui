import { connect } from 'react-redux';
import Implementation from './implementation';
import { setAttacker, setDefender } from '../../../store/actions';

const mapStateToProps = (state: any) => ({
  factions: state.factions,
  results: state.results,
  attacker: state.attacker,
  defender: state.defender
});

const mapDispatchToProps = (dispatch: any) => ({
  setAttacker: (attacker: number) => dispatch(setAttacker(attacker)),
  setDefender: (defender: number) => dispatch(setDefender(defender))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Implementation);