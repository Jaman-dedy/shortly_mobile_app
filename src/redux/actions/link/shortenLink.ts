import {
  GET_LINK_FAILURE,
  GET_LINK_START,
  GET_LINK_SUCCESS,
} from '@app/constants/action-types/shortenLink';
import {DispatchType} from '@app/types';

export const shortenLink = (urlLink: string) => {
  return (dispatch: DispatchType) => {
    dispatch({
      type: GET_LINK_START,
    });
    fetch(`https://api.shrtco.de/v2/shorten?url=${urlLink}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: GET_LINK_SUCCESS,
          payload: data?.result,
        });
      })
      .catch(err => {
        dispatch({
          type: GET_LINK_FAILURE,
          payload: err,
        });
      });
  };
};
