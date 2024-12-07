const date = new Date();

const year = date.getFullYear();
const month = date.toLocaleDateString('default', { month: 'long' });
const weekday = date.toLocaleDateString('default', { weekday: 'long' });
const day = date.getDay() + 1;

document.querySelector('.month').textContent = `${month}`;
document.querySelector('.weekday').textContent = `${weekday}`;
document.querySelector('.day').textContent = `${day}`;
document.querySelector('.year').textContent = `${year}`;

