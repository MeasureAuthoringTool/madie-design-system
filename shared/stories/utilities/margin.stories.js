import storyWrapper from '../storyWrapper';

export default {
  title: 'Utilities/Margin'
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

export const Margin = () => utilClassStory('qpp-u-margin');

export const MarginX = () => utilClassStory('qpp-u-margin-x');

export const MarginY = () => utilClassStory('qpp-u-margin-y');

export const MarginTop = () => utilClassStory('qpp-u-margin-top');

export const MarginBottom = () => utilClassStory('qpp-u-margin-bottom');

export const MarginLeft = () => utilClassStory('qpp-u-margin-left');

export const MarginRight = () => utilClassStory('qpp-u-margin-right');

export const ResponsiveExample = () =>
  storyWrapper(
    `
    <pre>qpp-u-md-margin--40 qpp-u-sm-margin--24 qpp-u-margin--8</pre>
    <div class="qpp-u-md-margin--40 qpp-u-sm-margin--24 qpp-u-margin--8" style="${borderStyle}">
      <div class="qpp-u-fill--gray-20">
        <span>resize viewport to see breakpoint adjustments</span>
      </div>
    </div>
    <br />
    `,
    'qpp-u-display--flex qpp-u-flex-direction--column'
  );
