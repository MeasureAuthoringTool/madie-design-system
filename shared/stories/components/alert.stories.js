import storyWrapper from '../storyWrapper';

export default {
  title: 'Components/Alert',
};

export const Alert = () =>
  storyWrapper(`
  <h1 class="h3">Information</h2>
  <div class="qpp-c-alert qpp-c-alert--info" role="alert">
    <div class="qpp-c-alert__body">
      <h2 class="h4 qpp-c-alert__heading">Informative status</h2>
      <p class="qpp-c-alert__text">
        Lorem ipsum dolor sit amet,
        <a class="qpp-c-link" href="javascript:void(0);"
          >consectetur adipiscing elit</a
        >, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
  <br />
  <h1 class="h3">Warning</h2>
  <div class="qpp-c-alert qpp-c-alert--warning" role="alert">
    <div class="qpp-c-alert__body">
      <h2 class="h4 qpp-c-alert__heading">Informative status</h2>
      <p class="qpp-c-alert__text">
        Lorem ipsum dolor sit amet,
        <a class="qpp-c-link" href="javascript:void(0);"
          >consectetur adipiscing elit</a
        >, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
  <br />
  <h1 class="h3">Error</h2>
  <div class="qpp-c-alert qpp-c-alert--error" aria-label="error alert example" role="alert">
    <div class="qpp-c-alert__body">
      <h2 class="h4 qpp-c-alert__heading">Informative status</h2>
      <p class="qpp-c-alert__text">
        Lorem ipsum dolor sit amet,
        <a class="qpp-c-link" href="javascript:void(0);"
          >consectetur adipiscing elit</a
        >, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
  <br />
  <h1 class="h3">Success</h2>
  <div class="qpp-c-alert qpp-c-alert--success" role="alert">
    <div class="qpp-c-alert__body">
      <h2 class="h4 qpp-c-alert__heading">Informative status</h2>
      <p class="qpp-c-alert__text">
        Lorem ipsum dolor sit amet,
        <a class="qpp-c-link" href="javascript:void(0);"
          >consectetur adipiscing elit</a
        >, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
  <br />
`);

export const WithoutHeading = () =>
  storyWrapper(`
  <h1 class="h3">Information</h2>
  <div class="qpp-c-alert qpp-c-alert--info" role="alert">
    <div class="qpp-c-alert__body">
      <p class="qpp-c-alert__text">
        Lorem ipsum dolor sit amet,
        <a class="qpp-c-link" href="javascript:void(0);"
          >consectetur adipiscing elit</a
        >, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
  <br />
  <h1 class="h3">Warning</h2>
  <div class="qpp-c-alert qpp-c-alert--warning" role="alert">
    <div class="qpp-c-alert__body">
      <p class="qpp-c-alert__text">
        Lorem ipsum dolor sit amet,
        <a class="qpp-c-link" href="javascript:void(0);"
          >consectetur adipiscing elit</a
        >, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
  <br />
  <h1 class="h3">Error</h2>
  <div class="qpp-c-alert qpp-c-alert--error" role="alert">
    <div class="qpp-c-alert__body">
      <p class="qpp-c-alert__text">
        Lorem ipsum dolor sit amet,
        <a class="qpp-c-link" href="javascript:void(0);"
          >consectetur adipiscing elit</a
        >, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
  <br />
  <h1 class="h3">Success</h2>
  <div class="qpp-c-alert qpp-c-alert--success" role="alert">
    <div class="qpp-c-alert__body">
      <p class="qpp-c-alert__text">
        Lorem ipsum dolor sit amet,
        <a class="qpp-c-link" href="javascript:void(0);"
          >consectetur adipiscing elit</a
        >, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
  <br />
`);
