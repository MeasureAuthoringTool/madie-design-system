import React from 'react';
import Search from './index';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Search',
  component: Search,
  decorators: [withKnobs],
};

export const ExampleSearch = () => (
  <Search
    id="Example id"
    name="Example name"
    placeholder="Example placeholder"
    inputAriaLabel="Example input arial-label"
    buttonAriaLabel="Example button arial-label"
  />
);

ExampleSearch.storyName = 'example Search';
