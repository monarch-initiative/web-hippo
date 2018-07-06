import { sortBy, groupBy } from 'lodash';
import { ENTITIES } from '../constants';

export const splitTextByAnnotations = (text, annotations) => {
  if (!text || !text.length) return [];
  if (!Array.isArray(annotations) || !annotations.length) return [{ text, isAnnotated: false }];

  let currentIndex = 0;
  const maxLen = text.length;
  const result = [];

  sortBy(annotations, ['startIndex']).forEach((annotation) => {
    const startIndex = Math.max(annotation.startIndex, 0);
    const endIndex = Math.min(annotation.endIndex, maxLen);
    if (startIndex >= currentIndex && endIndex > startIndex && currentIndex < maxLen) {
      if (currentIndex < startIndex) {
        result.push({
          text: text.substring(currentIndex, startIndex),
          isAnnotated: false,
        });
      }

      result.push({
        text: text.substring(startIndex, endIndex),
        isAnnotated: true,
        highlights: annotation.highlights,
      });
      currentIndex = endIndex;
    }
  });

  if (currentIndex < maxLen) {
    result.push({
      text: text.substring(currentIndex, maxLen),
      isAnnotated: false,
    });
  }

  return result;
};

export const itemsToOptionsArray = (items, getTypeStyle) =>
  (Array.isArray(items)
    ? items.map(item => ({
      key: item.id,
      value: item.id,
      type: item.type,
      text: item.text,
      description: item.type,
      style: getTypeStyle(item.type),
    }))
    : []);

export const getEntityByType = type => ENTITIES.find(entity => entity.type === type);

export const getCountOfTypes = (highlights) => {
  if (!Array.isArray(highlights) || highlights.length === 0) return 0;
  const groupedByType = groupBy(highlights, h => h.type);
  return Object.keys(groupedByType).length;
};

export const getItemById = (items, id) => items.find(item => item.id === id);

export const findFirstEntityIndexOfItems = filterItems =>
  ENTITIES.findIndex(entity => filterItems.some(filterItem => filterItem.type === entity.type));
