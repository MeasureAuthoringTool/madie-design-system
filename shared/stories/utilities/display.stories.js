import storyWrapper from '../storyWrapper';

export default {
  title: 'Utilities/Display'
};

const borderStyle = 'border: 1px solid black;';

export const Block = () =>
  storyWrapper(`
    <pre>qpp-u-display--block</pre>
    <br />
    <div class="qpp-u-padding--24" style="${borderStyle}">
      <div class="qpp-u-display--block  qpp-u-padding--40 qpp-u-fill--quality-blue"></div>
      <div class="qpp-u-display--block  qpp-u-padding--40 qpp-u-fill--ia-gold"></div>
      <div class="qpp-u-display--block  qpp-u-padding--40 qpp-u-fill--pi-magenta"></div>
      <div class="qpp-u-display--block  qpp-u-padding--40 qpp-u-fill--cost-green"></div>
    </div>
`);

export const InlineBlock = () =>
  storyWrapper(`
    <pre>qpp-u-display--inline-block</pre>
    <br />
    <div class="qpp-u-padding--24" style="${borderStyle}">
      <div class="qpp-u-display--inline-block qpp-u-padding--40 qpp-u-fill--quality-blue"></div>
      <div class="qpp-u-display--inline-block qpp-u-padding--40 qpp-u-fill--ia-gold"></div>
      <div class="qpp-u-display--inline-block qpp-u-padding--40 qpp-u-fill--pi-magenta"></div>
      <div class="qpp-u-display--inline-block qpp-u-padding--40 qpp-u-fill--cost-green"></div>
    </div>
`);

export const Inline = () =>
  storyWrapper(`
    <pre>qpp-u-display--inline</pre>
    <br />
    <div class="qpp-u-padding--24" style="${borderStyle}">
      <div class="qpp-u-display--inline qpp-u-padding--40 qpp-u-fill--quality-blue"></div>
      <div class="qpp-u-display--inline qpp-u-padding--40 qpp-u-fill--ia-gold"></div>
      <div class="qpp-u-display--inline qpp-u-padding--40 qpp-u-fill--pi-magenta"></div>
      <div class="qpp-u-display--inline qpp-u-padding--40 qpp-u-fill--cost-green"></div>
    </div>
`);

export const Flex = () =>
  storyWrapper(`
    <pre>qpp-u-display--flex</pre>
    <br />
    <div class="qpp-u-padding--24" style="${borderStyle}">
      <div class="qpp-u-display--flex qpp-u-padding--24 qpp-u-fill--quality-blue">
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
      </div>
      <div class="qpp-u-display--flex  qpp-u-padding--24 qpp-u-fill--ia-gold">
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>    
      </div>
      <div class="qpp-u-display--flex  qpp-u-padding--24 qpp-u-fill--pi-magenta">
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>    
      </div>
      <div class="qpp-u-display--flex qpp-u-padding--24 qpp-u-fill--cost-green">
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>    
      </div>
    </div>
`);

export const InlineFlex = () =>
  storyWrapper(`
    <pre>qpp-u-display--inline-flex</pre>
    <br />
    <div class="qpp-u-padding--24" style="${borderStyle}">
      <div class="qpp-u-display--inline-flex qpp-u-padding--24 qpp-u-fill--quality-blue">
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
      </div>
      <div class="qpp-u-display--inline-flex  qpp-u-padding--24 qpp-u-fill--ia-gold">
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>    
      </div>
      <div class="qpp-u-display--inline-flex  qpp-u-padding--24 qpp-u-fill--pi-magenta">
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>    
      </div>
      <div class="qpp-u-display--inline-flex qpp-u-padding--24 qpp-u-fill--cost-green">
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>
        <div class="qpp-u-flex--1 qpp-u-padding--16 qpp-u-margin--16 qpp-u-fill--gray-80"></div>    
      </div>
    </div>
`);

export const None = () =>
  storyWrapper(`
    <pre>qpp-u-display--none</pre>
    <div class="qpp-u-padding--24" style="${borderStyle}">
      <div class="qpp-u-display--none qpp-u-padding--24 qpp-u-fill--quality-blue">
        <p>Nothing to see here!</p>
      </div>
    </div>
  `);
