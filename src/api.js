import { RSAA } from 'redux-api-middleware';

export function post(endpoint, body, types) {
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json'
  };
  return {
    [RSAA]: {
      endpoint: `${process.env.REACT_APP_BASE_URL}${endpoint}`,
      method: 'POST',
      body: body,
      headers: headers,
      types: types
    }
  };
}
