import React from 'react';
import Breadcrumb from './index';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  decorators: [withKnobs],
};

export const ExampleLightBreadcrumb = () => (
  <div className="qppds qpp-u-padding--16 qpp-u-fill--blue-80">
    <Breadcrumb
      newBreadcrumb={boolean('newBreadcrumb', true)}
      crumbs={[
        {
          url: '/',
          category: 'MainContent',
          label: 'Home',
          title: 'Home',
        },
        {
          url: '/',
          category: 'MainContent',
          label: 'Mips Overview',
          title: 'Mips Overview',
        },
      ]}
    />
  </div>
);

ExampleLightBreadcrumb.storyName = 'Light';

export const ExampleScreenreaderOnlyBreadcrumb = () => (
  <div className="qppds qpp-u-padding--16 qpp-u-fill--blue-80">
    <Breadcrumb
      newBreadcrumb={boolean('newBreadcrumb', true)}
      crumbs={[
        {
          url: '/',
          category: 'MainContent',
          label: 'Home',
          title: 'Home',
        },
        'Mips Overview',
      ]}
    />
  </div>
);
ExampleScreenreaderOnlyBreadcrumb.storyName = 'SR Only Breadcrumb';

export const ExampleDarkBreadcrumb = () => (
  <div className="qppds qpp-u-padding--16">
    <Breadcrumb
      newBreadcrumb={boolean('newBreadcrumb', true)}
      dark
      crumbs={[
        {
          url: '/',
          category: 'MainContent',
          label: 'Home',
          title: 'Home',
        },
        {
          url: '/',
          category: 'MainContent',
          label: 'Mips Overview',
          title: 'Mips Overview',
        },
      ]}
    />
  </div>
);

ExampleDarkBreadcrumb.storyName = 'Dark';
