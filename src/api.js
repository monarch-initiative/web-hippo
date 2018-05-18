import { get, post, remove } from './rest';

export const getPublications = (pageNo, params, actions) =>
  post(`/query/?pageSize=${10}&pageNo=${pageNo}`, { ...params }, actions);

export const getAutocomplete = (autocompleteSearchQuery, actions) =>
  get(`/query/autocomplete/${encodeURIComponent(autocompleteSearchQuery)}`, actions);

export const postSubscription = (params, actions) => post('/subscription', { ...params }, actions);

export const deleteSubscription = (subscriptionId, actions) =>
  remove(`/subscription/${subscriptionId}`, actions);

export const postFeedback = (params, actions) => post('/feedback', { ...params }, actions);
