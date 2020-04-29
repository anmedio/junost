import React from 'react';
import { render } from 'react-dom';

// Content
import grades from '~/grades';
import hintsOptions from '~/hints';

// Components
import Grades from '~/pages/grades';
import OnboardingPopup from '~/components/onboardingPopup';

if (!window.Promise) {
  window.Promise = Promise;
}

const components = [
  {
    component: <Grades data={grades} />,
    target: document.getElementById('grades'),
  },
];

$(() => {
  components.forEach(item => {
    if (item.target) render(item.component, item.target);
  });
});

$('.about').click(() => {
  $.magnificPopup.open({
    items: {
      src: '#popup',
      type: 'inline',
    },
    removalDelay: 250,
    callbacks: {
      beforeOpen() {
        this.st.mainClass = 'mfp-anim';
      },
      open() {
        render(<OnboardingPopup />, $('#popup')[0]);
      },
      close() {
        render(<div />, $('#popup')[0]);
      },
    },
  });
});

// Hints
$('.help').click(() => {
  introJs()
    .setOptions(hintsOptions)
    .start();
});
