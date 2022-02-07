import React from 'react';
import { render } from '@testing-library/react';
import Accordion from '../../components/Accordion';

describe('Accordion', () => {
  it('Should render okay', () => {
    const { getByTestId } = render(
        <Accordion title="Title">Content</Accordion>
    );
    expect(getByTestId('accordion')).toBeTruthy();
  });
});
