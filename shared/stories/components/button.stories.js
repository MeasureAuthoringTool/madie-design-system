import storyWrapper from '../storyWrapper';
import svgDownload from '@material-design-icons/svg/filled/download.svg';
import svgNavigateNext from '@material-design-icons/svg/filled/navigate_next.svg';
import svgNavigateBefore from '@material-design-icons/svg/filled/navigate_before.svg';
import { mapSvgAttrs } from '../svgAttrs';

export default {
  title: 'Components/Button',
};

export const PrimaryButton = () =>
  storyWrapper(`
    <button class="qpp-c-button qpp-u-margin-right--8">
      Primary Button
    </button>
    <button disabled class="qpp-c-button qpp-u-margin-right--8">
      Disabled
    </button>
    <button class="qpp-c-button qpp-c-button--hover qpp-u-margin-right--8">
      Hover
    </button>
    <button class="qpp-c-button qpp-c-button--focus qpp-u-margin-right--8">
      Focus
    </button>
  `);

export const SecondaryButton = () =>
  storyWrapper(`
    <button class="qpp-c-button qpp-c-button--secondary qpp-u-margin-right--8">
      Secondary Button
    </button>
    <button
      disabled
      class="qpp-c-button qpp-c-button--secondary qpp-u-margin-right--8"
    >
      Disabled
    </button>
    <button
      class="qpp-c-button qpp-c-button--secondary qpp-c-button--hover qpp-u-margin-right--8"
    >
      Hover
    </button>
    <button
      class="qpp-c-button qpp-c-button--secondary qpp-c-button--focus qpp-u-margin-right--8"
    >
      Focus
    </button>
`);

export const WhiteButton = () =>
  storyWrapper(
    `
    <button class="qpp-c-button qpp-c-button--white qpp-u-margin-right--8">
      White Button
    </button>
    <button
      disabled
      class="qpp-c-button qpp-c-button--white qpp-u-margin-right--8"
    >
      Disabled
    </button>
    <button
      class="qpp-c-button qpp-c-button--white qpp-c-button--hover qpp-u-margin-right--8"
    >
      Hover
    </button>
    <button
      class="qpp-c-button qpp-c-button--white qpp-c-button--focus qpp-u-margin-right--8"
    >
      Focus
    </button>
`,
    'qppds qpp-u-fill--blue-80'
  );

export const OutlineButton = () =>
  storyWrapper(
    `
    <button class="qpp-c-button qpp-c-button--outline qpp-u-margin-right--8">
      Outline Button
    </button>
    <button
      disabled
      class="qpp-c-button qpp-c-button--outline qpp-u-margin-right--8"
    >
      Disabled
    </button>
    <button
      class="qpp-c-button qpp-c-button--outline qpp-c-button--hover qpp-u-margin-right--8"
    >
      Hover
    </button>
    <button
      class="qpp-c-button qpp-c-button--outline qpp-c-button--focus qpp-u-margin-right--8"
    >
      Focus
    </button>
`,
    'qppds qpp-u-fill--blue-70'
  );

export const DestructiveButton = () =>
  storyWrapper(`
    <button class="qpp-c-button qpp-c-button--danger qpp-u-margin-right--8">
      Destructive Button
    </button>
    <button
      disabled
      class="qpp-c-button qpp-c-button--danger qpp-u-margin-right--8"
    >
      Disabled
    </button>
    <button
      class="qpp-c-button qpp-c-button--danger qpp-c-button--hover qpp-u-margin-right--8"
    >
      Hover
    </button>
    <button
      class="qpp-c-button qpp-c-button--danger qpp-c-button--focus qpp-u-margin-right--8"
    >
      Focus
    </button>
`);

export const BigButtons = () =>
  storyWrapper(`
    <button class="qpp-c-button qpp-c-button--big qpp-u-margin-right--8">
      Big Primary Button
    </button>
    <hr />
    <button class="qpp-c-button qpp-c-button--secondary qpp-c-button--big qpp-u-margin-right--8">
      Big Secondary Button
    </button>
`);

export const LinkButtons = () =>
  storyWrapper(`
    <a href="#" class="qpp-c-button">
      Primary Link Button
    </a>
    <hr />
    <a href="#" class="qpp-c-button qpp-c-button--secondary">
      Secondary Link Button
    </a>
    <hr />
    <a href="#" class="qpp-c-button qpp-c-button--danger">
      Danger Link Button
    </a>
    <hr />
    <div class="qpp-u-fill--gray-60 qpp-u-padding--8">
      <a href="#" class="qpp-c-button qpp-c-button--white">
        White Link Button
      </a>
    </div>
    <hr />
    <a href="#" class="qpp-c-button qpp-c-button--text">
      Text Link Button
    </a>
`);

export const IconButtons = () => {
  const [DOWNLOAD, NEXT, BEFORE] = mapSvgAttrs(
    [svgDownload, svgNavigateNext, svgNavigateBefore],
    {
      class: 'qpp-icon-mat',
      'aria-hidden': 'true',
      role: 'img',
      focusable: 'false',
    }
  );

  return storyWrapper(`
    <button class="qpp-c-button qpp-c-button--icon-before qpp-u-margin-right--8">
    ${DOWNLOAD}Icon Button (before label)
    </button>
    <button class="qpp-c-button qpp-c-button--icon-after qpp-u-margin-right--8">
      Icon Button (after label)${NEXT}
    </button>
    <hr />
    <button class="qpp-c-button qpp-c-button--big qpp-c-button--icon-before qpp-u-margin-right--8">
      ${BEFORE}Big Icon Button (before label)
    </button>
    <button class="qpp-c-button qpp-c-button--big qpp-c-button--icon-after qpp-u-margin-right--8">
      Big Icon Button (after label)${NEXT}
    </button>
    <hr />
    <button class="qpp-c-button qpp-c-button--secondary qpp-c-button--icon-before qpp-u-margin-right--8">
      ${DOWNLOAD}Secondary Icon Button (before label)
    </button>
    <button class="qpp-c-button qpp-c-button--secondary qpp-c-button--icon-after qpp-u-margin-right--8">
      Secondary  Icon Button (after label)${NEXT}
    </button>
    <hr />
    <button class="qpp-c-button qpp-c-button--danger qpp-c-button--icon-before qpp-u-margin-right--8">
    ${BEFORE}Danger Icon Button (before label)
    </button>
    <button class="qpp-c-button qpp-c-button--danger qpp-c-button--icon-after qpp-u-margin-right--8">
      Danger Icon Button (after label)${NEXT}
    </button>
`);
};

export const FullWidthButton = () => {
  const [DOWNLOAD] = mapSvgAttrs([svgDownload], {
    class: 'qpp-icon-mat',
    'aria-hidden': 'true',
    role: 'img',
    focusable: 'false',
  });
  return storyWrapper(`
    <button class="qpp-c-button qpp-u-width--100">
      Full Width Button
    </button>
    <hr />
    <button class="qpp-c-button qpp-u-width--100 qpp-c-button--icon-before">
      ${DOWNLOAD}
      Full Width Icon Button
    </button>
  `);
};

export const TextButton = () => {
  const [NEXT] = mapSvgAttrs([svgNavigateNext], {
    class: 'qpp-icon-mat',
    'aria-hidden': 'true',
    role: 'img',
    focusable: 'false',
  });
  return storyWrapper(`
    <button class="qpp-c-button qpp-c-button--text qpp-u-margin-right--8">
      Primary
    </button>
    <button disabled class="qpp-c-button qpp-c-button--text qpp-u-margin-right--8">
      Primary disabled
    </button>
    <button class="qpp-c-button qpp-c-button--text qpp-c-button--focus qpp-u-margin-right--8">
      Primary focus
    </button>
    <button class="qpp-c-button qpp-c-button--text qpp-c-button--hover qpp-u-margin-right--8">
      Primary hover
    </button>
    <hr />
    <button class="qpp-c-button qpp-c-button--danger qpp-c-button--text qpp-u-margin-right--8">
      Danger
    </button>
    <button disabled class="qpp-c-button qpp-c-button--danger qpp-c-button--text qpp-u-margin-right--8">
      Danger disabled
    </button>
    <button class="qpp-c-button qpp-c-button--danger qpp-c-button--text qpp-c-button--focus qpp-u-margin-right--8">
      Danger focus
    </button>
    <button class="qpp-c-button qpp-c-button--danger qpp-c-button--hover qpp-c-button--text">
      Danger hover
    </button>
    <hr />
    <div class="qpp-u-fill--gray-60 qpp-u-padding--8">
      <button class="qpp-c-button qpp-c-button--white qpp-c-button--text qpp-u-margin-right--8">
        Danger
      </button>
      <button disabled class="qpp-c-button qpp-c-button--white qpp-c-button--text qpp-u-margin-right--8">
        Danger
      </button>
      <button class="qpp-c-button qpp-c-button--white qpp-c-button--text qpp-c-button--focus qpp-u-margin-right--8">
        Danger
      </button>
      <button class="qpp-c-button qpp-c-button--white qpp-c-button--hover qpp-c-button--text">
        Danger
      </button>
    </div>
    <hr />
    <button class="qpp-c-button qpp-c-button--icon-after qpp-c-button--text">
      Icon Text Button${NEXT}
    </button>
  `);
};
