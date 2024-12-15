'use strict';

import { items } from './list.js';

const getItemPriceByName = (name) =>
  items.find((item) => item.name === name)?.price ?? 'Item not found';

console.log(getItemPriceByName('Candy Canes'));
console.log(getItemPriceByName('Snow Globes'));
console.log(getItemPriceByName('Ornaments'));
console.log(getItemPriceByName('Sugar wool'));
