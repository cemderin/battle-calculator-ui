import { connect } from 'react-redux';
import Implementation from './implementation';
import { updateList } from '../../../../store/actions';

const mapStateToProps = (state: any) => ({
    lists: state.lists
});

const mapDispatchToProps = (dispatch: any) => ({
    updateList: (listIndex: number, list: any) => dispatch(updateList(listIndex, list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Implementation);