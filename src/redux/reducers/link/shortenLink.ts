import {ActionType} from '@app/types';
import {
  GET_LINK_FAILURE,
  GET_LINK_START,
  GET_LINK_SUCCESS,
} from '@app/constants/action-types/shortenLink';
import ILink from '@app/types/ILink';

export default (
  state: ILink,
  {type, payload}: ActionType,
): {[key: string]: any} | null => {
  switch (type) {
    case GET_LINK_START:
      return {
        ...state,
        shortenLink: {
          ...state.shortenLink,
          loading: true,
          error: null,
          success: false,
        },
      };
    case GET_LINK_FAILURE:
      return {
        ...state,
        shortenLink: {
          ...state.shortenLink,
          error: payload,
          loading: false,
          success: false,
        },
      };
    case GET_LINK_SUCCESS:
      return {
        ...state,
        shortenLink: {
          ...state.shortenLink,
          result: [...state.shortenLink.result, payload],
          error: null,
          loading: false,
          success: true,
        },
      };
    default:
      return null;
  }
};
