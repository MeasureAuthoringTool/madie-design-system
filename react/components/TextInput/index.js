import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  id,
  name,
  placeholder,
  disabled,
  required,
  size,
  className,
  label,
  minLength,
  maxLength,
  hint,
  errorLabel,
  error,
  autoComplete,
  onChange,
  onKeyPress,
  style,
  dataTestId,
  type,
  innerRef,
  number,
  variant,
  parentElement,
  ...props
}) => {
  const ContainerElement = parentElement || 'span';
  const numberProps = {
    pattern: '[0-9]*',
  };

  const textInputClass = [
    'qpp-c-text-input',
    variant === 'success' && !error && 'qpp-c-text-input--success',
    error && 'qpp-c-text-input--error',
    size === 'big' && 'qpp-c-text-input--big',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <ContainerElement className="qppds ds-text-input-container">
      {label && (
        <label className="qpp-u-margin-bottom--8" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        {...(number ? numberProps : {})}
        style={style}
        data-testid={dataTestId}
        type={type}
        className={textInputClass || ''}
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        autoComplete={autoComplete}
        onChange={onChange}
        onKeyPress={onKeyPress}
        ref={innerRef}
        {...props}
      />
      {hint && <span className="qpp-hint-message">{hint}</span>}
      {error && (
        <span
          aria-label={errorLabel}
          role="alert"
          className="qpp-error-message"
        >
          {error}
        </span>
      )}
    </ContainerElement>
  );
};

TextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  hint: PropTypes.string,
  errorLabel: PropTypes.string,
  error: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  style: PropTypes.object,
  dataTestId: PropTypes.string,
  type: PropTypes.string,
  innerRef: PropTypes.string,
  number: PropTypes.bool,
  variant: PropTypes.oneOf(['success']),
  parentElement: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(['big'])
};

TextInput.defaultProps = {
  id: '',
  name: '',
  placeholder: null,
  disabled: false,
  required: false,
  className: '',
  minLength: '',
  maxLength: '',
  error: null,
  errorLabel: null,
  hint: null,
  autoComplete: 'on',
  onChange: () => null,
  onKeyPress: () => null,
  style: null,
  dataTestId: '',
  type: 'text',
  innerRef: null,
  number: false,
  variant: null,
  parentElement: 'span',
  label: null,
  size: null,
};

export default TextInput;
