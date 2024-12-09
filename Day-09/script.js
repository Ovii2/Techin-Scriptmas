'use strict';

const cursors = [
  'assets/cursor/snowflake.png',
  'assets/cursor/present.png',
  'assets/cursor/christmas-tree.png',
  'assets/cursor/hat.png',
];

const randomizeCursor = () => {
  const randomIndex = Math.floor(Math.random() * cursors.length);
  const randomCursor = cursors[randomIndex];
  document.documentElement.style.cursor = `url(${randomCursor}), auto`;
};

document.addEventListener('DOMContentLoaded', randomizeCursor);

document.addEventListener('click', randomizeCursor);
