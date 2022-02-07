import React from 'react';
import { render } from '@testing-library/react';
import jwt from 'jsonwebtoken';

import { SideNavUI } from '../../components/SideNav/UI';

describe('SideNavUI', () => {
  it('renders the sidebar HTML', () => {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: {
          firstName: 'Bobby',
        },
      },
      'secret'
    );
    document.cookie = `qpp_auth_token=${token}`;

    const { container } = render(<SideNavUI svgIcons="" />);
    expect(container.querySelector('aside')).toBeDefined();
  });
});
