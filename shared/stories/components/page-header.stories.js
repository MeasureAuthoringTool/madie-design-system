import storyWrapper from '../storyWrapper';
import breadcrumbsLightExample from './breadcrumbs-light.example';
import svgDownload from '@material-design-icons/svg/filled/download.svg';
import svgPrint from '@material-design-icons/svg/outlined/print.svg';
import { mapSvgAttrs } from '../svgAttrs';

export default {
  title: 'Components/PageHeader',
};

const [DOWNLOAD, PRINT] = mapSvgAttrs([svgDownload, svgPrint], {
  class: 'qpp-icon-mat',
  'aria-hidden': 'true',
  role: 'img',
  focusable: 'false',
});

export const PageHeader = () =>
  storyWrapper(`
    <div class="qpp-c-page-header">
      <div class="qpp-c-page-header__main-content qpp-u-xxs-padding-x--16 qpp-u-sm-padding-x--40">
        ${breadcrumbsLightExample}
        <h1 class="qpp-c-page-header__title">Header Title</h1>
        <p class="qpp-c-page-header__description">Optional description.</p>
      </div>
    </div>
  `);

export const PageHeaderWithBasicUtilBar = () =>
  storyWrapper(`
    <div class="qpp-c-page-header">
      <div class="qpp-c-page-header__main-content qpp-u-xxs-padding-x--16 qpp-u-sm-padding-x--40">
        ${breadcrumbsLightExample}
        <h1 class="qpp-c-page-header__title">Header With Example Util Bar</h1>
        <p class="qpp-c-page-header__description">Util bar should be used to provide additional page-level UI controls.</p>
      </div>
      <div class="qpp-c-page-header__subheader qpp-u-xxs-padding-x--16 qpp-u-sm-padding-x--40">
        <label for="performance-year-selector" class="qpp-u-visually-hidden">Label</label>
        <select id="performance-year-selector" class="qpp-c-dropdown qpp-u-xxs-width--100 qpp-u-xs-width--auto">
          <option value="2018">Performance Year 2018</option>
          <option value="2019">Performance Year 2019</option>
          <option value="2020">Performance Year 2020</option>
          <option value="2021">Performance Year 2021</option>
        </select>
      </div>
    </div>
  `);

export const PageHeaderWithResponsiveMultiElementToolbar = () =>
  storyWrapper(`
    <div class="qpp-c-page-header">
      <div class="qpp-c-page-header__main-content qpp-u-xxs-padding-x--16 qpp-u-sm-padding-x--40">
        ${breadcrumbsLightExample}
        <h1 class="qpp-c-page-header__title">Header With Example Util Bar</h1>
        <p class="qpp-c-page-header__description">Util bar should be used to provide additional page-level UI controls.</p>
      </div>
      <div class="qpp-c-page-header__subheader qpp-u-xxs-padding-x--16 qpp-u-sm-padding-x--40">
        <!-- Example template for common util bar content -->
        <div class="qpp-u-display--flex qpp-u-xxs-flex-direction--column qpp-u-xs-flex-direction--row qpp-u-flex-wrap--wrap qpp-u-justify-content--between qpp-u-align-items--start">
          <div class="qpp-u-xxs-margin-bottom--16 qpp-u-xs-margin-bottom--0 qpp-u-xxs-width--100 qpp-u-xs-width--auto">
            <label for="performance-year-selector" class="qpp-u-visually-hidden">Label</label>
            <select id="performance-year-selector" class="qpp-c-dropdown qpp-u-xxs-width--100 qpp-u-xs-width--auto">
              <option value="2018">Performance Year 2018</option>
              <option value="2019">Performance Year 2019</option>
              <option value="2020">Performance Year 2020</option>
              <option value="2021">Performance Year 2021</option>
            </select>
          </div>
          <div class="qpp-u-display--flex qpp-u-flex-direction--row qpp-u-justify-content--between qpp-u-align-items--start qpp-u-xxs-width--100 qpp-u-xs-width--auto">
            <button class="qpp-c-button qpp-c-button--secondary qpp-c-button--icon-before qpp-u-xxs-margin-right--16 qpp-u-xs-margin-right--8 qpp-u-sm-margin-right--16 qpp-u-xxs-width--100 qpp-u-xs-width--auto">
              ${DOWNLOAD}
              Download Data
            </button>
            <button class="qpp-c-button qpp-c-button--secondary qpp-c-button--icon-after qpp-u-xxs-width--100 qpp-u-xs-width--auto">
              Print
              ${PRINT}
            </button>
          </div>
        </div>
      </div>
    </div>
  `);

export const PageHeaderWithEyebrow = () =>
  storyWrapper(`
    <div class="qpp-c-page-header">
      <div class="qpp-c-page-header__main-content qpp-u-xxs-padding-x--16 qpp-u-sm-padding-x--40">
        ${breadcrumbsLightExample}
        <h1 class="qpp-c-page-header__title">Header Title</h1>
        <span class="qpp-c-page-header__eyebrow">eyebrow</span>
        <p class="qpp-c-page-header__description">Optional description.</p>
      </div>
    </div>
  `);

export const PageHeaderWithoutBreadcrumbs = () =>
  storyWrapper(`
    <div class="qpp-c-page-header">
      <div class="qpp-c-page-header__main-content qpp-u-xxs-padding-x--16 qpp-u-sm-padding-x--40">
        <h1 class="qpp-c-page-header__title">Header Title</h1>
        <p class="qpp-c-page-header__description">Optional description.</p>
      </div>
    </div>
    <br />
    <div class="qpp-c-page-header">
      <div class="qpp-c-page-header__main-content qpp-u-xxs-padding-x--16 qpp-u-sm-padding-x--40">
        <h1 class="qpp-c-page-header__title">Header Title</h1>
        <span class="qpp-c-page-header__eyebrow">eyebrow</span>
        <p class="qpp-c-page-header__description">Optional description.</p>
      </div>
    </div>
  `);
