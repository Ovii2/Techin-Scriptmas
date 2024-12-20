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
  const draggedElement = document.getElementById(data);

  const dropTarget = e.target.closest('#div1, #div2');

  if (dropTarget) {
    dropTarget.appendChild(draggedElement);

    const placeholder = dropTarget.querySelector('.placeholder');
    if (placeholder) {
      placeholder.remove();
    }
  }

  const div2 = document.getElementById('div2');
  if (div2.children.length === 0) {
    addPlaceholder(div2);
  }
};

const addPlaceholder = (container) => {
  const placeholder = document.createElement('div');
  placeholder.className = 'placeholder';
  placeholder.textContent = 'Drag items here';
  container.appendChild(placeholder);
};

window.onload = () => {
  const div2 = document.getElementById('div2');
  if (div2.children.length === 0) {
    addPlaceholder(div2);
  }
};
