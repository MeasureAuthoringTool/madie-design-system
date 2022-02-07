import layoutVars from '../styles/qppds/settings/variables/_layout.scss';

export default {
  title: 'Layout',
};

export const RaisedBorder = () => `
  <div class="qpp-raised-border" style="width: 33%; height: 300px;">
    <p class="qpp-u-padding--16">You can also use the <span class="qpp-u-font--monospace qpp-u-font-weight--medium">raised-border</span> mixin to apply these styles in css</p>
  </div>
`;

export const JavascriptVariables = () => `
  <pre>${JSON.stringify(layoutVars, null, 2)}</pre>
`;
