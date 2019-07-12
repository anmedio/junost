import React from 'react';
import { render } from 'react-dom';

// Content
import grades from '~/grades';

// Components
import Grades from '~/pages/grades';

if (!window.Promise) {
  window.Promise = Promise;
}

const components = [
  {
    component: <Grades data={grades} />,
    target: document.getElementById('grades'),
  }
];

$(() => {
  components.forEach(item => {
    if (item.target) render(item.component, item.target);
  });
});
