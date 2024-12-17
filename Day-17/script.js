'use strict';

import { list } from './data.js';

const findTopThreeHighestScores = (array) => {
  const sortedArray = [...array].sort((a, b) => b.points - a.points);

  const top1 = sortedArray[0]?.points ?? 'Top highest score not found';
  const top2 = sortedArray[1]?.points ?? 'Second highest score not found';
  const top3 = sortedArray[2]?.points ?? 'Third highest score not found';

  return `Top 1: ${top1}, Top 2: ${top2}, Top 3: ${top3}`;
};

console.log(findTopThreeHighestScores(list));