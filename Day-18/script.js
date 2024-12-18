'use strict';

const userInput = prompt(
  'Season’s greetings! What flavors of froyo would you like to enjoy today?'
);

const resultsEl = document.querySelector('.results');
resultsEl.classList.add('hidden');

const countFlavors = (string) => {
  if (typeof string !== 'string' || string.trim() === '') {
    alert('Please enter valid flavor names');
    return;
  }

  const flavors = string
    .split(',')
    .map((flavor) => flavor.trim())
    .filter((word) => word.trim().length > 0);

  const count = {};
  flavors.forEach((flavor) => {
    count[flavor] = (count[flavor] || 0) + 1;
  });

  resultsEl.classList.remove('hidden');

  const tbody = document.querySelector('#flavorTable tbody');
  tbody.innerHTML = '';

  Object.entries(count).forEach(([flavor, count]) => {
    const row = document.createElement('tr');
    const flavorCell = document.createElement('td');
    const countCell = document.createElement('td');

    countCell.classList.add('text-center');

    flavorCell.textContent = flavor.charAt(0).toUpperCase() + flavor.slice(1);
    countCell.textContent = count;

    row.appendChild(flavorCell);
    row.appendChild(countCell);
    tbody.appendChild(row);
  });
};

countFlavors(userInput);
