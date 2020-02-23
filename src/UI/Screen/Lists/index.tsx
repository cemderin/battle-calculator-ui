import { connect } from 'react-redux';
import Implementation from './implementation';
import { setLists, deleteList } from '../../../store/actions';

const mapStateToProps = (state: any) => ({
    lists: state.lists
});

const mapDispatchToProps = (dispatch: any) => ({
  setLists: (lists: Array<any>) => dispatch(setLists(lists)),
  deleteList: (listIndex: number) => dispatch(deleteList(listIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Implementation);