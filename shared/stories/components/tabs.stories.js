import storyWrapper from '../storyWrapper';
import svgMessage from '@material-design-icons/svg/filled/message.svg';
import svgPerson from '@material-design-icons/svg/filled/person.svg';
import { mapSvgAttrs } from '../svgAttrs';

export default {
  title: 'Components/Tabs',
};

const [PERSON, MESSAGE] = mapSvgAttrs([svgPerson, svgMessage], {
  class: 'qpp-icon-mat',
  'aria-hidden': 'true',
  role: 'img',
  focusable: 'false',
});

export const Tabs = () =>
  storyWrapper(`
<div class="qpp-c-tabs" role="tablist" aria-label="Example Tabs">
  ${Array(4)
    .fill('')
    .reduce(
      (acc, cur, i) =>
        acc +
        `
      <a
        class="qpp-c-tabs__item"
        href="#panel-${i + 1}"
        role="tab"
        aria-selected="${i === 0}"
        aria-disabled="false"
        aria-controls="panel-${i + 1}"
        id="tab-${i + 1}"
        target="_self"
      >
        Tab
      </a>
    `,
      ''
    )}
</div>
  ${Array(4)
    .fill('')
    .reduce(
      (acc, cur, i) =>
        acc +
        `
        <div
          class="qpp-c-tabs__panel"
          id="panel-${i + 1}"
          aria-labelledby="tab-${i + 1}"
          aria-hidden="${i !== 0}"
          role="tabpanel"
        >
          Example content
        </div>
    `,
      ''
    )}
`);

export const TabButtons = () =>
  storyWrapper(`
<div class="qpp-c-tabs" role="tablist" aria-label="Example Tabs">
  ${Array(4)
    .fill('')
    .reduce(
      (acc, cur, i) =>
        acc +
        `
      <button
        class="qpp-c-tabs__item"
        role="tab"
        aria-selected="${i === 0}"
        aria-disabled="false"
        aria-controls="panel-${i + 1}"
        id="tab-${i + 1}"
      >
        Tab
      </button>
    `,
      ''
    )}
</div>
  ${Array(4)
    .fill('')
    .reduce(
      (acc, cur, i) =>
        acc +
        `
        <div
          class="qpp-c-tabs__panel"
          id="panel-${i + 1}"
          aria-labelledby="tab-${i + 1}"
          aria-hidden="${i !== 0}"
          role="tabpanel"
        >
          Example content
        </div>
    `,
      ''
    )}
`);

export const IconTabs = () =>
  storyWrapper(`
<div class="qpp-c-tabs" role="tablist" aria-label="Settings">
  <a
    class="qpp-c-tabs__item"
    href="#panel-profile"
    role="tab"
    aria-selected="true"
    aria-controls="panel-profile"
    id="tab-profile"
    target="_self"
  >
    ${PERSON}
    Profile
  </a>
  <a
    class="qpp-c-tabs__item"
    href="#panel-comms"
    role="tab"
    aria-selected="false"
    aria-controls="panel-comms"
    id="tab-comms"
    target="_self"
  >
    ${MESSAGE}
    Communication preferences
  </a>
</div>
<div
  class="qpp-c-tabs__panel"
  id="panel-profile"
  aria-labelledby="tab-profile"
  role="tabpanel"
>
  Example content
</div>
<div
  class="qpp-c-tabs__panel"
  id="panel-comms"
  aria-hidden="true"
  aria-labelledby="tab-comms"
  role="tabpanel"
>
  Communication preferences content
</div>
`);

export const IconTabButttons = () =>
  storyWrapper(`
<div class="qpp-c-tabs" role="tablist" aria-label="Settings">
  <button
    class="qpp-c-tabs__item"
    href="#panel-profile"
    role="tab"
    aria-selected="true"
    aria-controls="panel-profile"
    id="tab-profile"
    target="_self"
  >
    ${PERSON}
    Profile
  </button>
  <button
    class="qpp-c-tabs__item"
    href="#panel-comms"
    role="tab"
    aria-selected="false"
    aria-controls="panel-comms"
    id="tab-comms"
    target="_self"
  >
    ${MESSAGE}
    Communication preferences
  </button>
</div>
<div
  class="qpp-c-tabs__panel"
  id="panel-profile"
  aria-labelledby="tab-profile"
  role="tabpanel"
>
  Example content
</div>
<div
  class="qpp-c-tabs__panel"
  id="panel-comms"
  aria-hidden="true"
  aria-labelledby="tab-comms"
  role="tabpanel"
>
  Communication preferences content
</div>
`);
