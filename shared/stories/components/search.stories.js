import storyWrapper from '../storyWrapper';
import svgSearch from '@material-design-icons/svg/filled/search.svg';
import { mapSvgAttrs } from '../svgAttrs';

export default {
  title: 'Components/Search',
};

const [SEARCH] = mapSvgAttrs([svgSearch], {
  class: 'qpp-icon-mat',
  'aria-hidden': 'true',
  focusable: 'false',
});

export const CompactSearch = () =>
  storyWrapper(`
    <form role="search" class="qpp-c-search qpp-c-search--compact">
      <label class="qpp-u-visually-hidden" for="compact-example">Search</label>
      <div class="qpp-c-search__wrap">
        <input class="qpp-c-text-input" type="search" id="compact-example" name="compact-example" placeholder="Example placeholder">
        <button id="compact-search" type="submit" class="qpp-c-search__submit qpp-c-button qpp-c-button--text">
          <span class="qpp-u-visually-hidden">Search</span>
          ${SEARCH}
        </button>
      </div>
    </form>
  `);

export const LabeledCompactSearch = () =>
  storyWrapper(`
    <form role="search" class="qpp-c-search qpp-c-search--compact">
      <label class="qpp-u-display--block" for="compact-example2">Search Label</label>
      <div class="qpp-c-search__wrap">
        <input class="qpp-c-text-input" type="search" id="compact-example2" name="compact-example2" placeholder="Example placeholder">
        <button id="compact-search2" type="submit" class="qpp-c-search__submit qpp-c-button qpp-c-button--text">
          <span class="qpp-u-visually-hidden">Search</span>
          ${SEARCH}
        </button>
      </div>
    </form>
  `);

export const ExtensiveSearch = () =>
  storyWrapper(`
    <form role="search" class="qpp-c-search">
    <label class="qpp-u-visually-hidden" for="extensive-example">Search</label>
      <div class="qpp-c-search__wrap">
        <input class="qpp-c-text-input" type="search" id="extensive-example" name="extensive-example" placeholder="Example placeholder">
        <div class="qpp-c-search__icon">
          ${SEARCH}
        </div>
      </div>
      <button id="extensive-search" type="submit" class="qpp-c-search__submit qpp-c-button">
        Search
      </button>
    </form>
  `);

export const LabeledExtensiveSearch = () =>
  storyWrapper(`
    <form role="search" class="qpp-c-search">
    <label class="qpp-u-display--block" for="extensive-example2">Search Label</label>
      <div class="qpp-c-search__wrap">
        <input class="qpp-c-text-input" type="search" id="extensive-example2" name="extensive-example2" placeholder="Example placeholder">
        <div class="qpp-c-search__icon">
          ${SEARCH}
        </div>
      </div>
      <button id="extensive-search2" type="submit" class="qpp-c-search__submit qpp-c-button">
        Search
      </button>
    </form>
  `);
