import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { waitFor, cleanup, fireEvent, render } from '@testing-library/react';
import moxios from 'moxios';

import HeaderUI from '../../components/Header/HeaderUI';

describe('HeaderUI', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('renders a header', async () => {
    window.location = {
      origin: 'localhost:3000'
    }
    moxios.stubRequest(`${window.location.origin}/config/header`, {
      status: 200,
      responseText: JSON.stringify({
        data: {
          content: [
            {
              name: 'Test Header Menu',
              subtitle: 'The test menu item',
            },
          ],
        },
      }),
    });
    const { container, getByText } = render(<HeaderUI />);
    await waitFor(() => expect(container.querySelector('nav')).toBeDefined());
    expect(getByText('Test Header Menu')).toBeDefined();
  });

  it('renders a header with login menu', async () => {
    const { container } = render(<HeaderUI isLoginEnabled={true} />);
    await waitFor(() => expect(container.querySelector('nav')).toBeDefined());
    expect(container.querySelector('.login')).toBeDefined();
  });
});
