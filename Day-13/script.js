import { customerData } from './data.js';

const greetCustomer = (customerObj, customerName) => {
  const customerInfo = customerObj[customerName];

  if (!customerInfo) {
    return `Welcome to the North Pole Café! Is this your first time? ❄️`;
  }

  if (customerInfo.visits === 1) {
    return `Ho ho ho! Welcome back, ${customerName}! We're glad you enjoyed your first visit! 🎅`;
  }

  if (customerInfo.visits > 1) {
    return `Merry greetings, ${customerName}! So wonderful to see you again! 🎄`;
  }
};

console.log(greetCustomer(customerData, 'Joe'));
console.log(greetCustomer(customerData, 'Carol'));
console.log(greetCustomer(customerData, 'Howard'));
console.log(greetCustomer(customerData, 'Carrie'));
console.log(greetCustomer(customerData, 'Bob'));
