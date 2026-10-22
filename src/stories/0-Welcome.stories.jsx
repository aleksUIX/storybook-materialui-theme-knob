import React from 'react';
import { linkTo } from '@storybook/addon-links';
function Welcome({ showApp }) {
  return <main>
    <h1>Explore the Material UI theme demo.</h1>
    <p>Use the Theme toolbar to switch between Garden and RetroWave.</p>
    <button onClick={showApp}>Open button stories</button>
  </main>;
}

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;

ToStorybook.story = {
  name: 'to Storybook',
};
