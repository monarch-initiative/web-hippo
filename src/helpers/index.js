import { sortBy, flatten } from 'lodash';

export const splitSearchQuery = searchQuery => {
  let searchArray = searchQuery
    .split(/[\s,]+/)
    .map(item => item.trim())
    .filter(Boolean);
  return searchArray;
};

export const getOffsetsArray = annotations => {
  if (!annotations || !Array.isArray(annotations.genes)) return [];
  return sortBy(flatten(annotations.genes.map(gene => [...gene.offsets])), [
    'startIndex'
  ]);
};

export const splitTextByOffsets = (text, offsets) => {
  if (!text || !text.length) return [];
  if (!Array.isArray(offsets) || !offsets.length)
    return [{ text, isAnnotated: false }];

  let currentIndex = 0;
  const maxLen = text.length;
  let result = [];

  offsets.forEach(offset => {
    const startIndex = Math.max(offset.startIndex, 0);
    const endIndex = Math.min(offset.endIndex, maxLen);
    if (
      startIndex >= currentIndex &&
      endIndex > startIndex &&
      currentIndex < maxLen
    ) {
      if (currentIndex < startIndex) {
        result.push({
          text: text.substring(currentIndex, startIndex),
          isAnnotated: false
        });
      }

      result.push({
        text: text.substring(startIndex, endIndex),
        isAnnotated: true
      });
      currentIndex = endIndex;
    }
  });

  if (currentIndex < maxLen) {
    result.push({
      text: text.substring(currentIndex, maxLen),
      isAnnotated: false
    });
  }

  return result;
};
