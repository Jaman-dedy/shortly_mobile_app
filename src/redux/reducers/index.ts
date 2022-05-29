import {combineReducers} from 'redux';

import {InitialState, ActionType} from '@app/types';
import preloadedState from '@app/redux/initialState';
import link from './link';

export const reducers = {
  link,
};

const rootReducer = combineReducers(reducers);

export default (
  initialState: InitialState,
  action: ActionType,
): {[key: string]: any} => {
  const state = initialState || preloadedState;
  return {
    ...rootReducer(state as any, action),
  };
};
