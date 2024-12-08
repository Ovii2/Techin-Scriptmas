'use strict';

const calculateDeliveryTime = (houses, speed) => {
  let result = 0;

  for (let i = 0; i < houses.length; i++) {
    const [x, y] = houses[i];
    const distanceToHouse = Math.hypot(x, y);
    result += distanceToHouse * 2;
  }

  return result / speed;
};

const houses = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const speed = 10;

const deliveryTime = calculateDeliveryTime(houses, speed);
console.log(`Total delivery time: ${deliveryTime.toFixed(2)} hours`);
