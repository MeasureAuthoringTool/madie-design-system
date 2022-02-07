import React from 'react';
import { render } from '@testing-library/react';
import ErrorUI from '../../components/Error/ErrorUI';


describe('ErrorUI', () => {
  it('renders a list of errors in HTML', () => {
    const code = '404';
    const type = 'Bad thing happened';
    const message = [
      { contentTitle: 'Not found', content: 'test' },
      { contentTitle: 'Image not found', content: 'test number 2' },
    ];
    const { debug, container } = render(
      <ErrorUI type={type} code={code} message={message} />
    );
    expect(container.querySelector('.page-error')).toBeTruthy()
    expect(container.querySelector('.collapsible-details')).toBeTruthy()
    expect(container.querySelectorAll('.items li').length).toBe(2)
  });

  it('renders a string instead of an array', () => {
    const code = '404';
    const type = 'Bad thing happened';
    const message = 'Not found';
    const { getByText, container } = render(
      <ErrorUI type={type} code={code} message={message} />
    );
    expect(container.querySelector('.page-error')).toBeTruthy()
    expect(container.querySelector('.collapsible-details')).toBeTruthy()
    expect(getByText(/not found/i)).toBeTruthy()
  });
});
