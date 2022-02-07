import storyWrapper from '../storyWrapper';

export default {
  title: 'Utilities/Position'
};

export const Absolute = () =>
  storyWrapper(`
    <pre>qpp-u-position--absolute</pre>
    <div class="qpp-u-position--absolute qpp-u-width--third" style="left: 96px; top: 96px;">
      <p>Jelly-o liquorice gingerbread oat cake. Sweet chocolate biscuit pudding jelly beans candy candy canes candy. Pie sweet roll candy canes croissant donut soufflé jujubes.</p>
    </div>
  `);

export const Relative = () =>
  storyWrapper(`
    <pre>qpp-u-position--relative</pre>
    <div class="qpp-u-position--relative qpp-u-width--third" style="left: 96px; top: 96px;">
      <p>Jelly-o liquorice gingerbread oat cake. Sweet chocolate biscuit pudding jelly beans candy candy canes candy. Pie sweet roll candy canes croissant donut soufflé jujubes.</p>
    </div>
  `);
