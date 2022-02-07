import storyWrapper from '../storyWrapper';

export default {
  title: 'Utilities/Visibility'
};

const borderStyle = 'border: 1px solid black;';

export const Visible = () =>
  storyWrapper(`
    <pre>qpp-u-visibility--visible</pre>
    <div class="qpp-u-padding--24" style="${borderStyle}">
      <div class="qpp-u-visibility--visible qpp-u-padding--24 qpp-u-fill--blue-10">
        <p>Some visible text!</p>
      </div>
    </div>
  `);

export const Hidden = () =>
  storyWrapper(`
    <pre>qpp-u-visibility--hidden</pre>
    <div class="qpp-u-padding--24" style="${borderStyle}">
      <div class="qpp-u-visibility--hidden qpp-u-padding--24 qpp-u-fill--blue-10">
        <p>Some hidden text!</p>
      </div>
    </div>
  `);

export const VisuallyHidden = () =>
  storyWrapper(`
    <pre>qpp-u-visually-hidden</pre>
    <span class="qpp-hint-message">(screen-reader-only text)</span>
    <div class="qpp-u-padding--24" style="${borderStyle}">
      <div class="qpp-u-visually-hidden qpp-u-padding--24 qpp-u-fill--blue-10">
        <p>Some screen reader text!</p>
      </div>
    </div>
  `);

export const VisuallyHiddenFocusable = () =>
  storyWrapper(`
    <pre>qpp-u-visually-hidden-focusable</pre>
    <span class="qpp-hint-message">(visible on tab focus)</span>
    <div class="qpp-u-padding--24" style="${borderStyle}">
      <div class="qpp-u-visually-hidden-focusable qpp-u-padding--24 qpp-u-fill--blue-10" tabindex="0" >
        <p>Some text that is visible when focused!</p>
      </div>
    </div>
  `);
