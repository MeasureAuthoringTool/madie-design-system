import colorVars from '../styles/qppds/settings/variables/_color.scss';

export default {
  title: 'Color',
};

const colors = {
  'gray scale': {
    white: { bg: colorVars['white'], fg: 'black' },
    'gray-02': { bg: colorVars['gray02'], fg: 'black' },
    'gray-04': { bg: colorVars['gray04'], fg: 'black' },
    'gray-10': { bg: colorVars['gray10'], fg: 'black' },
    'gray-20': { bg: colorVars['gray20'], fg: 'black' },
    'gray-60': { bg: colorVars['gray60'], fg: 'white' },
    'gray-70': { bg: colorVars['gray70'], fg: 'white' },
    'gray-80': { bg: colorVars['gray80'], fg: 'white' },
    'gray-90': { bg: colorVars['gray90'], fg: 'white' },
    black: { bg: colorVars['black'], fg: 'white' },
  },
  blue: {
    'blue-05': { bg: colorVars['blue05'], fg: 'black' },
    'blue-10': { bg: colorVars['blue10'], fg: 'black' },
    'blue-30': { bg: colorVars['blue30'], fg: 'black' },
    'blue-40': { bg: colorVars['blue40'], fg: 'black' },
    'blue-60': { bg: colorVars['blue60'], fg: 'white' },
    'blue-70': { bg: colorVars['blue70'], fg: 'white' },
    'blue-80': { bg: colorVars['blue80'], fg: 'white' },
  },
  cyan: {
    'cyan-20': { bg: colorVars['cyan20'], fg: 'black' },
    'cyan-40': { bg: colorVars['cyan40'], fg: 'black' },
    'cyan-50': { bg: colorVars['cyan50'], fg: 'white' },
  },
  green: {
    'green-05': { bg: colorVars['green05'], fg: 'black' },
    'green-30': { bg: colorVars['green30'], fg: 'black' },
    'green-50': { bg: colorVars['green50'], fg: 'white' },
  },
  gold: {
    'gold-05': { bg: colorVars['gold05'], fg: 'black' },
    'gold-20': { bg: colorVars['gold20'], fg: 'black' },
    'gold-40': { bg: colorVars['gold40'], fg: 'black' },
  },
  red: {
    'red-10': { bg: colorVars['red10'], fg: 'black' },
    'red-50': { bg: colorVars['red50'], fg: 'white' },
    'red-60': { bg: colorVars['red60'], fg: 'white' },
  },
};

colors['performance category colors'] = {
  'cost-green': { bg: colorVars['costGreen'], fg: 'black' },
  'ia-gold': { bg: colorVars['iaGold'], fg: 'black' },
  'pi-magenta': { bg: colorVars['piMagenta'], fg: 'black' },
  'quality-blue': { bg: colorVars['qualityBlue'], fg: 'white' },
};

export const Palette = () => `
<div class="qppds qpp-u-margin--8">
  ${Object.keys(colors).reduce((accumulator, categoryTitle) => {
    const categoryColors = colors[categoryTitle];
    const categoryColorNames = Object.keys(categoryColors);
    return (
      accumulator +
      `
        <h2>${categoryTitle}</h2>
      ` +
      categoryColorNames
        .map(
          (colorName) =>
            `
        <div class="qpp-u-fill--${colorName} qpp-u-padding-x--16" style="width:auto;height:auto;color:${categoryColors[colorName].fg};">
          <p>${colorName}</p>
          <p>${categoryColors[colorName].bg}</p>
        </div>
        `
        )
        .join('')
    );
  }, '')}
</div>`;

export const JavascriptVariables = () => `
  <pre>${JSON.stringify(colorVars, null, 2)}</pre>
`;
