import storyWrapper from '../storyWrapper';

export default {
  title: 'Components/Dropdown',
};

export const Dropdown = () =>
  storyWrapper(`
    <label for="dropdown">Dropdown</label>
    <select id="dropdown" class="qpp-c-dropdown">
      <option value="1">Value 1</option>
      <option value="2">Value 2</option>
      <option value="3">Value 3</option>
      <option value="4">Value 4</option>
    </select>
    <br>
    <label for="disabled-dropdown">Dropdown Disabled</label>
    <select disabled id="disabled-dropdown" class="qpp-c-dropdown">
      <option value="1">Value 1</option>
      <option value="2">Value 2</option>
      <option value="3">Value 3</option>
      <option value="4">Value 4</option>
    </select>
    <br>
    <label for="dropdown-hover">Dropdown Hover</label>
    <select id="dropdown-hover" class="qpp-c-dropdown qpp-c-dropdown--hover">
      <option value="1">Value 1</option>
      <option value="2">Value 2</option>
      <option value="3">Value 3</option>
      <option value="4">Value 4</option>
    </select>
    <br>
    <label for="dropdown-focus">Dropdown Focus</label>
    <select id="dropdown-focus" class="qpp-c-dropdown qpp-c-dropdown--focus">
      <option value="1">Value 1</option>
      <option value="2">Value 2</option>
      <option value="3">Value 3</option>
      <option value="4">Value 4</option>
    </select>
  `);

export const DropdownWithoutLabel = () =>
  storyWrapper(`
    <label for="dropdown-without-label" class="qpp-u-visually-hidden">Label</label>
    <select id="dropdown-without-label" class="qpp-c-dropdown">
      <option value="1">Value 1</option>
      <option value="2">Value 2</option>
      <option value="3">Value 3</option>
      <option value="4">Value 4</option>
    </select>
  `);

export const FullWidthDropdown = () =>
  storyWrapper(`
    <label for="full-width-dropdown">Label</label>
    <select id="full-width-dropdown" class="qpp-c-dropdown qpp-u-width--100">
      <option value="1">Value 1</option>
      <option value="2">Value 2</option>
      <option value="3">Value 3</option>
      <option value="4">Value 4</option>
    </select>
`);
