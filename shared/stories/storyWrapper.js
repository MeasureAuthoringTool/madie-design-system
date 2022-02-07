export default (storyHTML, classNames = 'qppds', styles = '') => `
  <div class="qpp-u-padding--16 ${classNames}" style="${styles}">
    ${storyHTML}
  </div>
`;
