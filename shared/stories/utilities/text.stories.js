import storyWrapper from '../storyWrapper';

export default {
  title: 'Utilities/Text',
};

const borderStyle = 'border: 1px solid black;';
const borderStyle2 = `${borderStyle} border-top: 0;`;

export const Color = () =>
  storyWrapper(`
    <div class="qpp-u-padding--16 qpp-u-margin--bottom--16 qpp-u-fill--blue-80" style="${borderStyle}">
      <p class="qpp-u-color--white">qpp-u-color--white</p>
    </div>
    <div class="qpp-u-padding--16 qpp-u-margin--bottom--16 qpp-u-fill--white" style="${borderStyle2}">
      <p class="qpp-u-color--black">qpp-u-color--black</p>
    </div>
    <div class="qpp-u-padding--16 qpp-u-margin--bottom--16 qpp-u-fill--white" style="${borderStyle2}">
      <p class="qpp-u-color--gray-60">qpp-u-color--gray-60</p>
    </div>
    <div class="qpp-u-padding--16 qpp-u-margin--bottom--16 qpp-u-fill--white" style="${borderStyle2}">
      <p class="qpp-u-color--gray-80">qpp-u-color--gray-80</p>
    </div>
    <div class="qpp-u-padding--16 qpp-u-margin--bottom--16 qpp-u-fill--white" style="${borderStyle2}">
      <p class="qpp-u-color--gray-90">qpp-u-color--gray-90</p>
    </div>
    <div class="qpp-u-padding--16 qpp-u-margin--bottom--16 qpp-u-fill--white" style="${borderStyle2}">
      <p class="qpp-u-color--blue-70">qpp-u-color--blue-70</p>
    </div>
    <div class="qpp-u-padding--16 qpp-u-margin--bottom--16 qpp-u-fill--white" style="${borderStyle2}">
      <p class="qpp-u-color--red-60">qpp-u-color--red-60</p>
    </div>
`);

export const FontFamily = () =>
  storyWrapper(`
    <div class="qpp-u-padding--16 qpp-u-margin--bottom--16">
      <p class="qpp-u-font--rubik">qpp-u-font--rubik</p>
      <p class="qpp-u-font--monospace">qpp-u-font--monospace</p>
    </div>
`);

const fontSizes = [12, 14, 16, 18, 20, 24, 32, 40, 48];
export const FontSize = () =>
  storyWrapper(
    fontSizes.reduce(
      (html, value) =>
        html +
        `
    <div class="qpp-u-margin--bottom--16">
      <p class="qpp-u-font-size--${value}">qpp-u-font-size--${value}</p>
    </div>
`,
      ''
    )
  );

export const FontWeight = () =>
  storyWrapper(`
    <div class="qpp-u-margin--bottom--16">
      <p class="qpp-u-font-weight--regular">qpp-u-font-weight--regular</p>
    </div>
    <div class="qpp-u-margin--bottom--16">
      <p class="qpp-u-font-weight--medium">qpp-u-font-weight--medium</p>
    </div>
  `);

export const Truncate = () =>
  storyWrapper(`
    <pre>qpp-u-truncate</pre>
    <div class="qpp-u-padding--8 qpp-u-width--third" style="${borderStyle}">
      <p class="qpp-u-truncate">Bonbon jujubes chupa chups fruitcake. Oat cake tootsie roll muffin donut topping brownie. Dragée candy gummi bears sweet apple pie. Croissant cupcake chupa chups cotton candy sweet brownie powder.</p>
    </div>
  `);

export const TextAlign = () =>
  storyWrapper(`
    <pre>qpp-u-text-align--left</pre>
    <div class="qpp-u-padding--8 qpp-u-width--third" style="${borderStyle}">
      <p class="qpp-u-text-align--left">Candy tiramisu icing. Fruitcake sugar plum pie carrot cake. Sugar plum soufflé macaroon donut jujubes cake sweet jujubes.</p>
    </div>
    <pre>qpp-u-text-align--right</pre>
    <div class="qpp-u-padding--8 qpp-u-width--third" style="${borderStyle}">
      <p class="qpp-u-text-align--right">Candy tiramisu icing. Fruitcake sugar plum pie carrot cake. Sugar plum soufflé macaroon donut jujubes cake sweet jujubes.</p>
    </div>
    <pre>qpp-u-text-align--center</pre>
    <div class="qpp-u-padding--8 qpp-u-width--third" style="${borderStyle}">
      <p class="qpp-u-text-align--center">Candy tiramisu icing. Fruitcake sugar plum pie carrot cake. Sugar plum soufflé macaroon donut jujubes cake sweet jujubes.</p>
    </div>
    <pre>qpp-u-text-align--justify</pre>
    <div class="qpp-u-padding--8 qpp-u-width--third" style="${borderStyle}">
      <p class="qpp-u-text-align--justify">Candy tiramisu icing. Fruitcake sugar plum pie carrot cake. Sugar plum soufflé macaroon donut jujubes cake sweet jujubes.</p>
    </div>
  `);
