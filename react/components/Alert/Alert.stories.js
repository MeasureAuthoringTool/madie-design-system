import React from 'react';

import Alert from './index';

export default {
  title: 'Alert',
  component: Alert,
};

export const Default = () => (
  <div className="qpp-u-padding--16">
    <h1 className="h3">Information</h1>
    <Alert
      title='Information Alert'
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet consequat ex ut vestibulum. Sed vel erat aliquet arcu eleifend gravida."
    />
    <h2 className="h3">Warning</h2>
    <Alert
      variant="warning"
      title={{ headingLevel: 'h3', text: 'Warning Alert' }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet
      consequat ex ut vestibulum. Sed vel erat aliquet arcu eleifend gravida.
    </Alert>
    <h2 className="h3">Error</h2>
    <Alert variant="error" title={{ headingLevel: 'h3', text: 'Error Alert' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet
      consequat ex ut vestibulum. Sed vel erat aliquet arcu eleifend gravida.
    </Alert>
    <h2 className="h3">Success</h2>
    <Alert
      variant="success"
      title={{ headingLevel: 'h3', text: 'Success Alert' }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet
      consequat ex ut vestibulum. Sed vel erat aliquet arcu eleifend gravida.
    </Alert>
  </div>
);

export const WithoutHeading = () => (
  <div className="qpp-u-padding--16">
    <h1 className="h3">Information</h1>
    <Alert description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet consequat ex ut vestibulum. Sed vel erat aliquet arcu eleifend gravida." />
    <h1 className="h3">Warning</h1>
    <Alert variant="warning">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet
      consequat ex ut vestibulum. Sed vel erat aliquet arcu eleifend gravida.
    </Alert>
    <h1 className="h3">Error</h1>
    <Alert variant="error">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet
      consequat ex ut vestibulum. Sed vel erat aliquet arcu eleifend gravida.
    </Alert>
    <h1 className="h3">Success</h1>
    <Alert variant="success">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi imperdiet
      consequat ex ut vestibulum. Sed vel erat aliquet arcu eleifend gravida.
    </Alert>
  </div>
);
