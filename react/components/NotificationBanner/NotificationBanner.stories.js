import React from 'react';
import NotificationBanner from './index';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'NotificationBanner',
  component: NotificationBanner,
  decorators: [withKnobs],
};

export const ExampleNotificationBanner = () => (
  <NotificationBanner
    result={{
      content: 'CONTENT',
      label: 'Label',
      name: 'name',
      color: 'blue',
      dismissable: boolean('dismissable', false),
    }}
  />
);

ExampleNotificationBanner.storyName = 'example NotificationBanner';
