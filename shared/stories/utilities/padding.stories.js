import storyWrapper from '../storyWrapper';

export default {
  title: 'Utilities/Padding'
};

const borderStyle = 'border: 1px solid black;';

const spacers = [0, 4, 8, 12, 16, 24, 32, 40, 48, 96];

const utilClassStory = utilClassPrefix =>
  storyWrapper(
    spacers.reduce(
      (html, spacer, i) =>
        html +
        `
        <pre>${utilClassPrefix}--${spacer}</pre>
        <div class="${utilClassPrefix}--${spacer}" style="${borderStyle}">
          <div class="qpp-u-fill--gray-20">
            <span>${spacer}</span>
          </div>
        </div>
        <br />
        `,
      ''
    ),
    'qpp-u-display--flex qpp-u-flex-direction--column'
  );

export const Padding = () => utilClassStory('qpp-u-padding');

export const PaddingX = () => utilClassStory('qpp-u-padding-x');

export const PaddingY = () => utilClassStory('qpp-u-padding-y');

export const PaddingTop = () => utilClassStory('qpp-u-padding-top');

export const PaddingBottom = () => utilClassStory('qpp-u-padding-bottom');

export const PaddingLeft = () => utilClassStory('qpp-u-padding-left');

export const PaddingRight = () => utilClassStory('qpp-u-padding-right');

export const ResponsiveExample = () =>
  storyWrapper(
    `
    <pre>qpp-u-md-padding--24 qpp-u-sm-padding--16 qpp-u-padding--8</pre>
    <div class="qpp-u-md-padding--24 qpp-u-sm-padding--16 qpp-u-padding--8" style="${borderStyle}">
      <div class="qpp-u-fill--gray-20">
        <span>resize viewport to see breakpoint adjustments</span>
      </div>
    </div>
    <br />
    `,
    'qpp-u-display--flex qpp-u-flex-direction--column'
  );
