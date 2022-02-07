import React from 'react';
import Tooltip from './index';

const offsetDecorator = (storyFn) => (
  <div style={{ margin: '80px' }}>{storyFn()}</div>
);

export default {
  title: 'Tooltip',
  component: Tooltip,
};

export const ExampleTooltip = () => (
  <Tooltip label="FOOBAR">
    <button>
      <span>Tooltip Trigger</span>
    </button>
  </Tooltip>
);

ExampleTooltip.storyName = 'example Tooltip';
ExampleTooltip.decorators = [offsetDecorator];

export const AriaLabelTooltip = () => (
  <Tooltip label="FOOBAR" ariaLabel="foobar">
    <button>
      <span>Tooltip Trigger</span>
    </button>
  </Tooltip>
);

AriaLabelTooltip.storyName = 'using ariaLabel';
AriaLabelTooltip.decorators = [offsetDecorator];

export const MultipleTooltip = () => (
  <>
    <Tooltip label="Tooltip 1">
      <button>
        <span>Tooltip 1 Trigger</span>
      </button>
    </Tooltip>
    <Tooltip label="Tooltip 2">
      <button>
        <span>Tooltip 2 Trigger</span>
      </button>
    </Tooltip>
    <Tooltip label="Tooltip 3">
      <button>
        <span>Tooltip 3 Trigger</span>
      </button>
    </Tooltip>
  </>
);

MultipleTooltip.storyName = 'multiple Tooltips';
MultipleTooltip.decorators = [offsetDecorator];

export const InputElementTooltip = () => (
  <form>
    <label htmlFor="foobar" style={{ marginRight: '5px ' }}>
      Text Input
    </label>
    <Tooltip label="example input label tooltip">
      <input type="text" name="foobar" />
    </Tooltip>
  </form>
);

InputElementTooltip.storyName = 'on text input';
InputElementTooltip.decorators = [offsetDecorator];

export const PositionedBelowTargetTooltip = () => (
  <Tooltip label="FOOBAR">
    <button>
      <span>Tooltip Trigger</span>
    </button>
  </Tooltip>
);

PositionedBelowTargetTooltip.storyName = 'positioned below trigger';
