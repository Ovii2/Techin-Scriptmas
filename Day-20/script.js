'use strict';

const allowDrop = (e) => {
  e.preventDefault();
};

const drag = (e) => {
  e.dataTransfer.setData('img', e.target.id);
};

const drop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('img');
  const dropTarget = e.target.closest('#div1, #div2') || e.target;
  dropTarget.appendChild(document.getElementById(data));
};
