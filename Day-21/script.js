'use strict';

import { coordinates } from './data.js';

const findPath = (coordinates) => {
  function euclideanDistance(point1, point2) {
    const dx = point1[0] - point2[0];
    const dy = point1[1] - point2[1];
    return Math.sqrt(dx * dx + dy * dy);
  }

  let minDistance = Infinity;
  let maxDistance = -Infinity;

  for (let i = 0; i < coordinates.length; i++) {
    for (let j = i + 1; j < coordinates.length; j++) {
      const distance = euclideanDistance(coordinates[i], coordinates[j]);
      minDistance = Math.min(minDistance, distance);
      maxDistance = Math.max(maxDistance, distance);
    }
  }

  const difference = maxDistance - minDistance;
  return difference.toFixed(2);
};

console.log(findPath(coordinates));
