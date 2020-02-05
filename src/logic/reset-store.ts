import reduxStore from '../store/store';
import { setFactions } from '../store/actions';

export default function resetStore() {
    reduxStore.dispatch(setFactions([]));
}