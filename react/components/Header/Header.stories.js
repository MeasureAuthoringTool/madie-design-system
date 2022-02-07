import React from 'react';
import Header from './HeaderUI';
import { withKnobs, boolean, text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Header',
  component: Header,
  decorators: [withKnobs],
};

export const Example = () => (
  <div id="qpp-nav-header">
    <Header
      isLoginEnabled={boolean('isLoginEnabled', true)}
      skipToContentId={text('skipToContentId', '')}
      includeSkipToSidebar={boolean('includeSkipToSidebar', false)}
      showFacilityBasedPreviewLink={boolean(
        'showFacilityBasedPreviewLink',
        false
      )}
      showCancelButton={boolean('showCancelButton', false)}
      handleCancel={action('handleCancel')}
      showPhysicianCompareLink={boolean('showPhysicianCompareLink', false)}
      performanceYear={number('performanceYear', 2019)}
      feedbackPerformanceYear={text('feedbackPerformanceYear', '')}
      fbpPerformanceYear={text('fbpPerformanceYear', '')}
      showCovidLink={boolean('showCovidLink', false)}
      isDevPre={boolean('isDevPre', false)}
    />
  </div>
);
