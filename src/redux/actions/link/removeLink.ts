import {DELETE_LINK_SUCCESS} from '@app/constants/action-types/deleteLink';
import {DispatchType} from '@app/types';

export const removeLink = (code: string) => {
  return (dispatch: DispatchType) => {
    dispatch({
      type: DELETE_LINK_SUCCESS,
      payload: code,
    });
  };
};
