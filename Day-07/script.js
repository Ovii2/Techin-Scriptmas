'use strict';

const formatPhoneNumber = (phone) => {
  return phone.length === 10 ? phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3') : null;
};

let output = formatPhoneNumber('8005551212');
console.log(output);
