import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './index';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Text Input',
  component: TextInput,
  decorators: [withKnobs],
};

const optionalProps = {
  'aria-label': 'example label',
};

const Wrapper = ({ children }) => (
  <div className="qpp-u-padding--16">{children}</div>
);
Wrapper.propTypes = {
  children: PropTypes.node,
};

export const InputField = () => (
  <Wrapper>
    <TextInput
      style={{ width: 'auto' }}
      id="example"
      name="single-example"
      value="Example value"
      label="Input Field"
      {...optionalProps}
    />
  </Wrapper>
);

export const InputFieldWithPlaceholder = () => (
  <Wrapper>
    <TextInput
      id="placeholder-example"
      name="placheholder"
      label="Placeholder Example"
      placeholder="Placeholder value"
    />
  </Wrapper>
);
export const DisabledInputField = () => (
  <Wrapper>
    <TextInput
      disabled={true}
      id="disabled-example"
      name="disabled_example"
      value="Example value"
      label="Disabled Example"
    />
  </Wrapper>
);

export const FocusedInputField = () => (
  <Wrapper>
    <TextInput
      id="focused-example"
      name="focused_example"
      value="Example value"
      label="Focused Example"
      className="qpp-c-text-input--focus"
    />
  </Wrapper>
);

export const ErrorInputField = () => (
  <Wrapper>
    <TextInput
      className="qpp-u-margin-bottom--8"
      id="error-example"
      name="error_example"
      value="Example value"
      error="Error Message"
      label="Error Example"
    />
  </Wrapper>
);

export const SuccessInputField = () => (
  <Wrapper>
    <TextInput
      variant="success"
      id="success-example"
      name="success"
      value="Example value"
      label="Success Example"
    />
  </Wrapper>
);

export const InputFieldWithHint = () => (
  <Wrapper>
    <TextInput
      className="qpp-u-margin-bottom--8"
      id="hint-example"
      name="hint"
      value="Example value"
      label="Hint Example"
      hint="Hint Message"
    />
  </Wrapper>
);

export const BigInput = () => (
  <Wrapper>
    <TextInput
      id="big-example"
      name="hint"
      value="Example value"
      label="Big Example"
      size="big"
    />
  </Wrapper>
);
