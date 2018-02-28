import { RSAA } from 'redux-api-middleware';

const contentTypeHeaders = {
  'Content-Type': 'application/json;',
};

const api = ({
  endpoint, method, types, body, headers,
}) => ({
  [RSAA]: {
    endpoint: `${process.env.REACT_APP_BASE_URL}${endpoint}`,
    method,
    body: JSON.stringify(body),
    headers,
    types,
  },
});

export const get = (endpoint, types) => api({ endpoint, method: 'GET', types });

export const put = (endpoint, body, types) =>
  api({
    endpoint, method: 'PUT', body, types, headers: contentTypeHeaders,
  });

export const post = (endpoint, body, types) =>
  api({
    endpoint, method: 'POST', types, body, headers: contentTypeHeaders,
  });

export const remove = (endpoint, types) =>
  api({
    endpoint, method: 'DELETE', types, headers: contentTypeHeaders,
  });
