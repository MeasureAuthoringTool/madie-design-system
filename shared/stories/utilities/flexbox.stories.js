import storyWrapper from '../storyWrapper';

export default {
  title: 'Utilities/Flexbox'
};

const borderStyle = 'border: 1px solid black;';

// flex-direction stories
const flexDirections = ['row', 'column', 'row-reverse', 'column-reverse'];
const flexDirectionReducer = (html, direction) =>
  html +
  `
  <pre>qpp-u-flex-direction--${direction}</pre>
  <div class="qpp-u-display--flex qpp-u-flex-direction--${direction} qpp-u-padding--24" style="${borderStyle}">
    <div class="qpp-u-flex--1 qpp-u-padding--24 qpp-u-margin--24 qpp-u-fill--blue-30">1</div>
    <div class="qpp-u-flex--1 qpp-u-padding--24 qpp-u-margin--24 qpp-u-fill--blue-60 qpp-u-color--white">2</div>
    <div class="qpp-u-flex--1 qpp-u-padding--24 qpp-u-margin--24 qpp-u-fill--blue-80 qpp-u-color--white">3</div>
  </div>
  <br />
  `;

export const FlexDirection = () =>
  storyWrapper(flexDirections.reduce(flexDirectionReducer, ''));

// justify-content stories
const justifyContentValues = ['start', 'end', 'center', 'between', 'around'];
const justifyContentReducer = (html, value) =>
  html +
  `
  <pre>qpp-u-justify-content--${value}</pre>
  <div class="qpp-u-display--flex qpp-u-justify-content--${value} qpp-u-flex-direction--row qpp-u-flex-wrap--wrap" style="${borderStyle}">
    <div class="qpp-u-width--20 qpp-u-padding--24 qpp-u-margin--24 qpp-u-fill--blue-30">1</div>
    <div class="qpp-u-width--20 qpp-u-padding--24 qpp-u-margin--24 qpp-u-fill--blue-60 qpp-u-color--white">2</div>
    <div class="qpp-u-width--20 qpp-u-padding--24 qpp-u-margin--24 qpp-u-fill--blue-80 qpp-u-color--white">3</div>
  </div>
  <br />
  `;

export const JustifyContent = () =>
  storyWrapper(justifyContentValues.reduce(justifyContentReducer, ''));

// align-items stories
const alignItemsValues = ['start', 'end', 'center', 'baseline', 'stretch'];
const alignItemsReducer = (html, value) =>
  html +
  `
  <pre>qpp-u-align-items--${value}</pre>
  <div class="qpp-u-display--flex qpp-u-align-items--${value} qpp-u-flex-direction--row qpp-u-flex-wrap--wrap" style="${borderStyle}">
    <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--24 qpp-u-fill--blue-30">1<br />2<br />3</div>
    <div class="qpp-u-flex--1 qpp-u-padding--40 qpp-u-margin--24 qpp-u-fill--blue-60 qpp-u-color--white">4</div>
    <div class="qpp-u-flex--1 qpp-u-padding--96 qpp-u-margin--24 qpp-u-fill--blue-80 qpp-u-color--white">5<br />6</div>
  </div>
  <br />
  `;

export const AlignItems = () =>
  storyWrapper(alignItemsValues.reduce(alignItemsReducer, ''));

// flex-wrap stories
const flexWrapValues = ['nowrap', 'wrap', 'reverse'];
const flexWrapReducer = (html, value) =>
  html +
  `
  <pre>qpp-u-flex-wrap--${value}</pre>
  <div class="qpp-u-display--inline-flex qpp-u-flex-wrap--${value} qpp-u-flex-gap--16 qpp-u-flex-direction--row">
    <div class="qpp-u-width--50">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-30">Pie gingerbread chupa chups sesame snaps macaroon bear claw cake. Soufflé jujubes cake. Oat cake liquorice pudding lemon drops danish. Apple pie carrot cake pie cupcake pie chocolate bar dessert sweet roll.</p>
    </div>
    <div class="qpp-u-width--50">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-60 qpp-u-color--white">Candy canes fruitcake icing liquorice. Gummi bears macaroon toffee gingerbread sweet roll soufflé jelly cupcake. Cake icing danish candy apple pie lollipop jelly cheesecake marzipan.</p>
    </div>
    <div class="qpp-u-width--50">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-80 qpp-u-color--white">Croissant tiramisu chocolate cake chocolate cake tart liquorice bonbon cupcake donut. Carrot cake carrot cake halvah pastry toffee pie sugar plum pudding sweet. Chupa chups lemon drops powder marshmallow cotton candy cake sweet roll chocolate marshmallow. Pudding chupa chups gingerbread cookie jelly-o lemon drops.</p>
    </div>
  </div>
  <br />
  `;

export const FlexWrap = () =>
  storyWrapper(flexWrapValues.reduce(flexWrapReducer, ''));

// flex-gap stories
// ro/col, row, & col variants
const spacers = [0, 4, 8, 12, 16, 24, 32, 40, 48, 96];

const getflexGapReducer = (variant = '') => (html, value) =>
  html +
  `
  <pre>qpp-u-flex-gap${variant}--${value}</pre>
  <div class="qpp-u-display--flex qpp-u-flex-wrap--wrap qpp-u-flex-gap${variant}--${value} qpp-u-flex-direction--row">
    <div class="qpp-u-width--100">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-10">Wafer croissant cupcake tiramisu chocolate cake jelly. Carrot cake donut danish. Cookie chocolate muffin jelly gummies sweet wafer jelly-o.</p>
    </div>
    <div class="qpp-u-width--50">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-30">Pie gingerbread chupa chups sesame snaps macaroon bear claw cake. Soufflé jujubes cake. Oat cake liquorice pudding lemon drops danish. Apple pie carrot cake pie cupcake pie chocolate bar dessert sweet roll.</p>
    </div>
    <div class="qpp-u-width--50">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-60 qpp-u-color--white">Candy canes fruitcake icing liquorice. Gummi bears macaroon toffee gingerbread sweet roll soufflé jelly cupcake. Cake icing danish candy apple pie lollipop jelly cheesecake marzipan.</p>
    </div>
    <div class="qpp-u-width--50">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-70 qpp-u-color--white">Croissant tiramisu chocolate cake chocolate cake tart liquorice bonbon cupcake donut. Carrot cake carrot cake halvah pastry toffee pie sugar plum pudding sweet. Chupa chups lemon drops powder marshmallow cotton candy cake sweet roll chocolate marshmallow. Pudding chupa chups gingerbread cookie jelly-o lemon drops.</p>
    </div>
    <div class="qpp-u-width--50">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-80 qpp-u-color--white">Chocolate cake gummies macaroon chupa chups sesame snaps. Macaroon pastry sweet roll brownie. Pudding lollipop jelly-o jelly beans cupcake cookie ice cream chocolate cake cake.</p>
    </div>
  </div>
  <br /><br />
  `;

export const FlexGap = () =>
  storyWrapper(spacers.reduce(getflexGapReducer(), ''));
export const FlexGapRow = () =>
  storyWrapper(spacers.reduce(getflexGapReducer('-row'), ''));
export const FlexGapCol = () =>
  storyWrapper(spacers.reduce(getflexGapReducer('-col'), ''));

// flex stories
const flexValues = [
  '1',
  'fifth',
  'quarter',
  'third',
  'half',
  'full',
  'initial',
  'auto',
  'none'
];
const flexReducer = (html, value) =>
  html +
  `
  <pre>qpp-u-flex--${value}</pre>
  <div class="qpp-u-display--flex qpp-u-flex-wrap--wrap qpp-u-flex-gap--16 qpp-u-flex-direction--row">
    <div class="qpp-u-flex--${value}">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-10">Croissant tiramisu chocolate cake chocolate cake tart liquorice bonbon cupcake donut. Carrot cake carrot cake halvah pastry toffee pie sugar plum pudding sweet. Chupa chups lemon drops powder marshmallow cotton candy cake sweet roll chocolate marshmallow. Pudding chupa chups gingerbread cookie jelly-o lemon drops.</p>
    </div>
    <div class="qpp-u-flex--${value}">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-30">Wafer croissant cupcake tiramisu chocolate cake jelly. Carrot cake donut danish. Cookie chocolate muffin jelly gummies sweet wafer jelly-o.</p>
    </div>
    <div class="qpp-u-flex--${value}">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-60 qpp-u-color--white">Pie gingerbread chupa chups sesame snaps macaroon bear claw cake. Soufflé jujubes cake. Oat cake liquorice pudding lemon drops danish. Apple pie carrot cake pie cupcake pie chocolate bar dessert sweet roll.</p>
    </div>
    <div class="qpp-u-flex--${value}">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-70 qpp-u-color--white">Candy canes fruitcake icing liquorice. Gummi bears macaroon toffee gingerbread sweet roll soufflé jelly cupcake. Cake icing danish candy apple pie lollipop jelly cheesecake marzipan.</p>
    </div>
    <div class="qpp-u-flex--${value}">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-80 qpp-u-color--white">Chocolate cake gummies macaroon chupa chups sesame snaps. Macaroon pastry sweet roll brownie. Pudding lollipop jelly-o jelly beans cupcake cookie ice cream chocolate cake cake.</p>
    </div>
  </div>
  <br /><br />
  `;

export const Flex = () =>
  storyWrapper(flexValues.reduce(flexReducer, ''), 'qpp-u-padding--0');

export const ResponsiveExample = () =>
  storyWrapper(`
  <pre>qpp-u-flex-direction--column qpp-u-md-flex-direction--row</pre>
  <div class="qpp-u-display--flex qpp-u-flex-wrap--wrap qpp-u-flex-gap--16 qpp-u-flex-direction--column qpp-u-md-flex-direction--row">
    <div class="qpp-u-flex--auto qpp-u-md-flex--1">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-10">Croissant tiramisu chocolate cake chocolate cake tart liquorice bonbon cupcake donut. Carrot cake carrot cake halvah pastry toffee pie sugar plum pudding sweet. Chupa chups lemon drops powder marshmallow cotton candy cake sweet roll chocolate marshmallow. Pudding chupa chups gingerbread cookie jelly-o lemon drops.</p>
    </div>
    <div class="qpp-u-flex--auto qpp-u-md-flex--1">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-30">Wafer croissant cupcake tiramisu chocolate cake jelly. Carrot cake donut danish. Cookie chocolate muffin jelly gummies sweet wafer jelly-o.</p>
    </div>
    <div class="qpp-u-flex--auto qpp-u-md-flex--1">
      <p class="qpp-u-padding--16 qpp-u-margin--0 qpp-u-fill--blue-60 qpp-u-color--white">Pie gingerbread chupa chups sesame snaps macaroon bear claw cake. Soufflé jujubes cake. Oat cake liquorice pudding lemon drops danish. Apple pie carrot cake pie cupcake pie chocolate bar dessert sweet roll.</p>
    </div>
  </div>
`);
