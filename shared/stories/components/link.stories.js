import storyWrapper from '../storyWrapper';
import svgLaunch from '@material-design-icons/svg/filled/launch.svg';
import { mapSvgAttrs } from '../svgAttrs';

export default {
  title: 'Components/Link',
};

export const Link = () =>
  storyWrapper(`
    <p>
      <a class="qpp-c-link" href="#">Link Label</a>
    </p>
    <p>
      <a class="qpp-c-link qpp-c-link--focus" href="#">Link Focused</a>
    </p>
    <p>
      <a class="qpp-c-link qpp-c-link--hover" href="#">Link Hover</a>
    </p>
  `);

export const LinkLight = () =>
  storyWrapper(
    `
    <p>
      <a class="qpp-c-link" href="#">Link Label</a>
    </p>
    <p>
      <a class="qpp-c-link qpp-c-link--focus" href="#">Link Focused</a>
    </p>
    <p>
      <a class="qpp-c-link qpp-c-link--hover" href="#">Link Hover</a>
    </p>
  `,
    'qppds qpp-dark-background'
  );

export const InlineLinks = () =>
  storyWrapper(`
  <p class="p1 qpp-u-width--60">
    Aenean lacinia <a href="#">inline link</a> nulla sed <a href="#">inline link</a>. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis <a href="#">inline link</a> dapibus posuere velit aliquet.
  </p>
  <p class="p2 qpp-u-width--60">
    Aenean lacinia <a href="#">inline link</a> nulla sed <a href="#">inline link</a>. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis <a href="#">inline link</a> dapibus posuere velit aliquet.
  </p>
`);

export const InlineLinksLight = () =>
  storyWrapper(
    `
  <p class="p1 qpp-u-width--60">
    Aenean lacinia <a href="#">inline link</a> nulla sed <a href="#">inline link</a>. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis <a href="#">inline link</a> dapibus posuere velit aliquet.
  </p>
  <p class="p2 qpp-u-width--60">
    Aenean lacinia <a href="#">inline link</a> nulla sed <a href="#">inline link</a>. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis <a href="#">inline link</a> dapibus posuere velit aliquet.
  </p>
`,
    'qppds qpp-dark-background'
  );

export const LinkWithIcon = () => {
  const [LAUNCH] = mapSvgAttrs([svgLaunch], {
    class: 'qpp-icon-mat',
    'aria-label': 'external website',
    role: 'img',
    focusable: 'false',
  });
  return storyWrapper(`
    <p>
      <a href="#" target="_self" class="qpp-c-link">
        Standalone Link With Icon${LAUNCH}
      </a>
    </p>
    <p class="p1 qpp-u-width--60">
      Aenean lacinia <a href="#">inline link${LAUNCH}</a> nulla sed <a href="#">inline link${LAUNCH}</a>. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis <a href="#">inline link${LAUNCH}</a> dapibus posuere velit aliquet.
    </p>
    <p class="p2 qpp-u-width--60">
      Aenean lacinia <a href="#">inline link${LAUNCH}</a> nulla sed <a href="#">inline link${LAUNCH}</a>. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis <a href="#">inline link${LAUNCH}</a> dapibus posuere velit aliquet.
    </p>
  `);
};
