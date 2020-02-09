import { connect } from 'react-redux';
import Implementation from './implementation';
import { deleteList, addList } from '../../../../store/actions';

const mapStateToProps = (state: any) => ({
    lists: state.lists
});

const mapDispatchToProps = (dispatch: any) => ({
    deleteList: (listIndex: number) => dispatch(deleteList(listIndex)),
    addList: (list: any) => dispatch(addList(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Implementation);