import React from 'react';
import { render } from 'react-dom';
import Promise from 'promise-polyfill';
import 'whatwg-fetch';

// Routing
import routes from './router';

// Components
import TestPage from '~/pages/test';

if (!window.Promise) {
  window.Promise = Promise;
}

const components = [
  {
    component: <TestPage routes={routes.test} />,
    target: document.getElementById('test'),
  }
];

$(() => {
  components.forEach(item => {
    if (item.target) render(item.component, item.target);
  });
});
