import { useDispatch as useDispatchRedux } from 'react-redux';
import { store } from './store';

/*
 * Necessary to dispatch thunks with typescript
 */
export type UseAppDispatch = () => typeof store.dispatch;
export const useDispatch: UseAppDispatch = useDispatchRedux;
