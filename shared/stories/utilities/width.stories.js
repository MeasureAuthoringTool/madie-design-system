import storyWrapper from '../storyWrapper';

export default {
  title: 'Utilities/Width'
};

const widthValues = [
  '10',
  '20',
  '25',
  '30',
  '33',
  'third',
  '34',
  '40',
  '50',
  '60',
  'two-thirds',
  '70',
  '75',
  '80',
  '90',
  '100',
  'auto'
];

const widthReducer = (html, value) =>
  html +
  `
  <pre>qpp-u-width--${value}</pre>
  <div class="qpp-u-width--${value} qpp-u-padding--24 qpp-u-fill--blue-70">
    <span class="qpp-u-color--white">${value}</span>
  </div>
  <br />
  `;

export const PercentageWidth = () =>
  storyWrapper(widthValues.reduce(widthReducer, ''));

export const ResponsiveExample = () =>
  storyWrapper(`
  <pre>qpp-u-width--100 qpp-u-md-width--50</pre>
  <div class="qpp-u-width--100 qpp-u-md-width--50 qpp-u-padding--24 qpp-u-fill--blue-70 qpp-u-color--white">
    <span class="qpp-u-md-display--none">100</span>
    <span class="qpp-u-display--none qpp-u-md-display--block">50</span>
  </div>
  `);
