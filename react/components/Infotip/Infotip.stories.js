import React from 'react';
import Infotip from './index';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Infotip',
  component: Infotip,
  decorators: [
    withKnobs,
    (storyFn) => (
      <div style={{ marginTop: '120px', marginLeft: '100px' }}>{storyFn()}</div>
    ),
  ],
};

export const ExampleInfoTip = () => (
  <Infotip label="Tooltip Content!" lightIcon={boolean('lightIcon', false)} />
);

ExampleInfoTip.storyName = 'qpp themed Infotip';

export const PositionCollisionInfotip = () => (
  <Infotip
    DEBUG_STYLE
    label="The DEBUG_STYLE prop is supported by the useTooltip hook and should only
  be used for development."
  />
);

PositionCollisionInfotip.storyName = 'position collision';

export const LongContentInfotip = () => (
  <div style={{ paddingTop: '50px' }}>
    <span style={{ marginLeft: '120px' }} />
    <Infotip
      DEBUG_STYLE
      label="Initial Eligibility determination covers data collected from Oct. 1, 2018 to Sept. 31, 2019. Determination was released in Dec. 2019. Final eligibility will be released in Nov. 2020."
    />
  </div>
);

LongContentInfotip.storyName = 'long content';

export const LightIconInfotip = () => (
  <div style={{ backgroundColor: '#04838A', padding: '20px', width: '16px' }}>
    <Infotip lightIcon label="Light Icon Infotip" />
  </div>
);

LightIconInfotip.storyName = 'alternate light icon';
