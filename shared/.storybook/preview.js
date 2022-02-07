import { addParameters } from '@storybook/html';
import '../styles/_main.scss';

// Import overrides to allow for storybook addon functionality (e.g. addon-backgrounds)
import './global-overrides.scss';

addParameters({
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'black', value: '#000000' },
      { name: 'gray02', value: '#f7f7f7' },
      { name: 'gray-04', value: '#f7f7f7' },
      { name: 'gray-10', value: '#dddddd' },
      { name: 'gray-20', value: '#b0b0b0' },
      { name: 'blue-10', value: '#cbe4ff' },
      { name: 'blue-60', value: '#0073c8' },
      { name: 'blue-70', value: '#125496' },
      { name: 'blue-80', value: '#003366' },
      { name: 'green-05', value: '#eff5eb' },
      { name: 'gold-05', value: '#fff9eb' },
      { name: 'red-10', value: '#fde7ea' },
    ],
    grid: {
      cellSize: 8,
      opacity: 0.5,
      cellAmount: 4,
      offsetX: 32,
      offsetY: 32,
    },
  },
});
