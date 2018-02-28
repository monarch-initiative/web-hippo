import { get, post } from './rest';

export const getPublications = (pageNo, params, actions) =>
  post(`/query/v1.0?pageSize=${10}&pageNo=${pageNo}`, { ...params }, actions);

export const getAutocomplete = (autocompleteSearchQuery, actions) =>
  get(`/query/autocomplete/beta/${encodeURIComponent(autocompleteSearchQuery)}`, actions);

export const postSubscription = (params, actions) => post('/subscription', { ...params }, actions);
