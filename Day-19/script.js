'use strict';

import { measurements } from './data.js';

const unitConverterAndCalculator = (object) => {
  const unitsToCm = {
    ft: 30.48,
    in: 2.54,
    mil: 160934,
    yd: 91.44,
    wm: 60,
  };

  const result = object.reduce((total, { value, unit }) => {
    const factor = unitsToCm[unit] || 0;
    return total + value * factor;
  }, 0);
  return `${result.toFixed(2)} cm`;
};

console.log(unitConverterAndCalculator(measurements));
