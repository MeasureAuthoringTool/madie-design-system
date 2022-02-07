import storyWrapper from '../storyWrapper';
import breadcrumbsLightExample from './breadcrumbs-light.example';

export default {
  title: 'Components/Breadcrumbs',
};

export const Breadcrumbs = () =>
  storyWrapper(`
    <nav class="qpp-c-breadcrumbs" aria-label="Breadcrumbs">
      <ol class="qpp-c-breadcrumbs__list">
        <li class="qpp-c-breadcrumbs__list-item">
          <a href="#" class="qpp-c-breadcrumbs__link">
            <span>Home</span>
          </a>
        </li>
        <li class="qpp-c-breadcrumbs__list-item">
          <a href="#" class="qpp-c-breadcrumbs__link">
            <span>Federal Contracting</span>
          </a>
        </li>
        <li class="qpp-c-breadcrumbs__list-item">
          <a href="#" class="qpp-c-breadcrumbs__link">
            <span>Contracting assistance programs</span>
          </a>
        </li>
      </ol>
    </nav>
  `);

export const BreadcrumbsLight = () =>
  storyWrapper(breadcrumbsLightExample, 'qpp-u-fill--blue-80');

export const BreadcrumbsWithCurrentPage = () =>
  storyWrapper(`
    <nav class="qpp-c-breadcrumbs" aria-label="Breadcrumbs">
      <ol class="qpp-c-breadcrumbs__list">
        <li class="qpp-c-breadcrumbs__list-item">
          <a href="#" class="qpp-c-breadcrumbs__link">
            <span>Home</span>
          </a>
        </li>
        <li class="qpp-c-breadcrumbs__list-item">
          <a href="#" class="qpp-c-breadcrumbs__link">
            <span>Federal Contracting</span>
          </a>
        </li>
        <li class="qpp-c-breadcrumbs__list-item">
          <a href="#" class="qpp-c-breadcrumbs__link">
            <span>Contracting assistance programs</span>
          </a>
        </li>
        <li class="qpp-c-breadcrumbs__list-item qpp-c-breadcrumbs__list-item--current" aria-current="page">
          <span>Women-owned small business federal contracting program</span>
        </li>
      </ol>
    </nav>
  `);
