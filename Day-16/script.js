'use strict';

const morseCode = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
};

const elfMorse = (string) => {
  const translation = string
    .toUpperCase()
    .split('')
    .map((char) => {
      const morse = morseCode[char];
      if (!morse) {
        console.error(`Invalid character: ${char}`);
        return '';
      }

      return morse.replace(/\./g, 'ho ').replace(/-/g, 'hoho ');
    });

  return translation.join('');
};

console.log(elfMorse('MERRY'));
console.log(elfMorse('123'));
