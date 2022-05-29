import {ActionType} from '@app/types';
import linkState from '@app/redux/initial-state/link';
import ILink from '@app/types/ILink';
import shortenLink from './shortenLink';
import deleteLink from './deleteLink';

export default (initialState: ILink, action: ActionType): ILink => {
  const state = initialState || linkState;
  return {
    ...state,
    ...shortenLink(state, action),
    ...deleteLink(state, action),
  };
};
