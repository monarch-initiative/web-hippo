import { RSAA } from 'redux-api-middleware';

export const post = (endpoint, body, types) => ({
  [RSAA]: {
    endpoint: `${process.env.REACT_APP_BASE_URL}${endpoint}`,
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
    types: types
  }
});
