import React from 'react';
import Collapsible from './Collapsible';
import PropTypes from 'prop-types';

const ErrorUI = (props) => {
  let errorTitle = `${props.type || 'Error'} ${props.code || ''}`;
  let errorDetails = props.message;

  return (
    <section className="page-error">
      <div className="responsive-container">
        <h1>We’re sorry.</h1>
        <p className="h2">We cannot access this page.</p>
        <Collapsible
          showLabel="Open technical details about the error"
          hideLabel="Close technical details about the error"
          contentTitle={errorTitle}
          content={errorDetails}
        />
      </div>
    </section>
  );
};

ErrorUI.propTypes = {
  code: PropTypes.string,
  message: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  type: PropTypes.string,
};

export default ErrorUI;
