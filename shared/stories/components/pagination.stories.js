import storyWrapper from '../storyWrapper';
import svgNavigateNext from '@material-design-icons/svg/filled/navigate_next.svg';
import svgNavigateBefore from '@material-design-icons/svg/filled/navigate_before.svg';
import { mapSvgAttrs } from '../svgAttrs';

export default {
  title: 'Components/Pagination',
};

const renderPagination = (items = [], tag = 'button') => {
  const [NEXT, BEFORE] = mapSvgAttrs([svgNavigateNext, svgNavigateBefore], {
    class: 'qpp-icon-mat',
    'aria-hidden': 'true',
    role: 'img',
    focusable: 'false',
  });

  return `
  <nav aria-label="Pagination" class="qpp-c-pagination">
    <ul class="qpp-c-pagination__list">
      ${
        !items[0].current
          ? `<li class="qpp-c-pagination__item qpp-c-pagination__arrow">
        <${tag} class="qpp-c-pagination__link qpp-c-pagination__previous" aria-label="Previous page">
          ${BEFORE}
          <span class="qpp-c-pagination__link-text"> Previous </span>
        </${tag}>
      </li>`
          : ''
      }
      ${items
        .map(
          (item) => `
        <li class="qpp-c-pagination__item ${
          item.overflow ? 'qpp-c-pagination__overflow' : ''
        }" ${item.overflow ? 'role="presentation"' : ''}>
          ${
            item.overflow
              ? '<span> … </span>'
              : `<${tag} class="qpp-c-pagination__button ${
                  item.current ? 'qpp-c-pagination__current' : ''
                }" aria-label="${item.ariaLabel}" ${
                  item.current ? 'aria-label="page"' : ''
                }>
                ${item.label}
            </${tag}>`
          }
        </li>
      `
        )
        .join('\n')}
      ${
        !items[items.length - 1].current
          ? `<li class="qpp-c-pagination__item qpp-c-pagination__arrow">
        <${tag} class="qpp-c-pagination__link qpp-c-pagination__next" aria-label="Next page">
          <span> Next </span>
          ${NEXT}
        </${tag}>
      </li>`
          : ''
      }
    </ul>
  </nav>
  `;
};

export const Pagination = () => {
  const [NEXT, BEFORE] = mapSvgAttrs([svgNavigateNext, svgNavigateBefore], {
    class: 'qpp-icon-mat',
    'aria-hidden': 'true',
    role: 'img',
    focusable: 'false',
  });
  return storyWrapper(
    `
<nav aria-label="Pagination" class="qpp-c-pagination">
  <ul class="qpp-c-pagination__list">
    <li class="qpp-c-pagination__item qpp-c-pagination__arrow">
      <button class="qpp-c-pagination__link qpp-c-pagination__previous" aria-label="Previous page">
        ${BEFORE}
        <span class="qpp-c-pagination__link-text"> Previous </span>
      </button>
    </li>

    <li class="qpp-c-pagination__item">
      <button class="qpp-c-pagination__button" aria-label="Page 1">
        1
      </button>
    </li>

    <li class="qpp-c-pagination__item qpp-c-pagination__overflow" role="presentation">
      <span> … </span>
    </li>

    <li class="qpp-c-pagination__item">
      <button class="qpp-c-pagination__button" aria-label="Page 9">
        9
      </button>
    </li>

    <li class="qpp-c-pagination__item">
      <button class="qpp-c-pagination__button qpp-c-pagination__current" aria-label="Page 10" aria-current="page">
        10
      </button>
    </li>

    <li class="qpp-c-pagination__item">
      <button class="qpp-c-pagination__button" aria-label="Page 11">
        11
      </button>
    </li>

    <li class="qpp-c-pagination__item qpp-c-pagination__overflow" role="presentation">
      <span> … </span>
    </li>

    <li class="qpp-c-pagination__item">
      <button class="qpp-c-pagination__button" aria-label="Last page, page 24">
        24
      </button>
    </li>

    <li class="qpp-c-pagination__item qpp-c-pagination__arrow">
      <button class="qpp-c-pagination__link qpp-c-pagination__next" aria-label="Next page">
        <span> Next </span>
        ${NEXT}
      </button>
    </li>
  </ul>
</nav>
`,
    ''
  );
};

export const LinkPagination = () => {
  const [NEXT, BEFORE] = mapSvgAttrs([svgNavigateNext, svgNavigateBefore], {
    class: 'qpp-icon-mat',
    'aria-hidden': 'true',
    role: 'img',
    focusable: 'false',
  });
  return storyWrapper(
    `
<nav aria-label="Pagination" class="qpp-c-pagination">
  <ul class="qpp-c-pagination__list">
    <li class="qpp-c-pagination__item qpp-c-pagination__arrow">
      <a href="javascript:void(0);" class="qpp-c-pagination__link qpp-c-pagination__previous" aria-label="Previous page">
        ${BEFORE}
        <span class="qpp-c-pagination__link-text"> Previous </span>
      </a>
    </li>

    <li class="qpp-c-pagination__item">
      <a href="javascript:void(0);" class="qpp-c-pagination__button" aria-label="Page 1">
        1
      </a>
    </li>

    <li class="qpp-c-pagination__item qpp-c-pagination__overflow" role="presentation">
      <span> … </span>
    </li>

    <li class="qpp-c-pagination__item">
      <a href="javascript:void(0);" class="qpp-c-pagination__button" aria-label="Page 9">
        9
      </a>
    </li>

    <li class="qpp-c-pagination__item">
      <a href="javascript:void(0);" class="qpp-c-pagination__button qpp-c-pagination__current" aria-label="Page 10" aria-current="page">
        10
      </a>
    </li>

    <li class="qpp-c-pagination__item">
      <a href="javascript:void(0);" class="qpp-c-pagination__button" aria-label="Page 11">
        11
      </a>
    </li>

    <li class="qpp-c-pagination__item qpp-c-pagination__overflow" role="presentation">
      <span> … </span>
    </li>

    <li class="qpp-c-pagination__item">
      <a href="javascript:void(0);" class="qpp-c-pagination__button" aria-label="Last page, page 24">
        24
      </a>
    </li>

    <li class="qpp-c-pagination__item qpp-c-pagination__arrow">
      <a href="javascript:void(0);" class="qpp-c-pagination__link qpp-c-pagination__next" aria-label="Next page">
        <span> Next </span>
        ${NEXT}
      </a>
    </li>
  </ul>
</nav>
`,
    ''
  );
};

export const VisualStates = () => {
  const FIRST = [
    { label: '1', ariaLabel: 'Page 1', current: true },
    { label: '2', ariaLabel: 'Page 2' },
    { label: '3', ariaLabel: 'Page 3' },
    { label: '4', ariaLabel: 'Page 4' },
    { label: '5', ariaLabel: 'Page 5' },
    { overflow: true },
    { label: '10', ariaLabel: 'Page 10' },
  ];

  const LAST = [
    { label: '1', ariaLabel: 'Page 1' },
    { overflow: true },
    { label: '6', ariaLabel: 'Page 6' },
    { label: '7', ariaLabel: 'Page 7' },
    { label: '8', ariaLabel: 'Page 8' },
    { label: '9', ariaLabel: 'Page 9' },
    { label: '10', ariaLabel: 'Page 10', current: true },
  ];

  const SHORT = [
    { label: '1', ariaLabel: 'Page 1' },
    { label: '2', ariaLabel: 'Page 2', current: true },
    { label: '3', ariaLabel: 'Page 3' },
    { label: '4', ariaLabel: 'Page 4' },
    { label: '5', ariaLabel: 'Page 5' },
  ];

  return storyWrapper(
    `
    <p> First Page </p>
    ${renderPagination(FIRST)}
    <br><br>
    <p> Last Page </p>
    ${renderPagination(LAST)}
    <br><br>
    <p> Short Set (< 7 pages) </p>
    ${renderPagination(SHORT)}
  `,
    'qpp-u-text-align--center'
  );
};
