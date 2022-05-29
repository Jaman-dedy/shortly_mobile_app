import {ActionType} from '@app/types';
import {DELETE_LINK_SUCCESS} from '@app/constants/action-types/deleteLink';
import ILink from '@app/types/ILink';

export default (
  state: ILink,
  {type, payload}: ActionType,
): {[key: string]: any} | null => {
  switch (type) {
    case DELETE_LINK_SUCCESS:
      return {
        ...state,
        shortenLink: {
          ...state.shortenLink,
          result: state.shortenLink?.result?.filter(
            (link: Record<string, string>) => link.code !== payload,
          ),
          error: null,
          loading: false,
          success: true,
        },
      };
    default:
      return null;
  }
};
