import storyWrapper from '../storyWrapper';

export default {
  title: 'Components/Modal',
};

const closeSvg = `
<svg viewBox="0 0 16 16" focusable="false">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <path
        d="M0.292893219,0.292893219 C0.683417511,-0.0976310729 1.31658249,-0.0976310729 1.70710678,0.292893219 L1.70710678,0.292893219 L8,6.585 L14.2928932,0.292893219 C14.6834175,-0.0976310729 15.3165825,-0.0976310729 15.7071068,0.292893219 C16.0675907,0.65337718 16.0953203,1.22060824 15.7902954,1.61289944 L15.7071068,1.70710678 L9.415,8 L15.7071068,14.2928932 L15.7902954,14.3871006 C16.0953203,14.7793918 16.0675907,15.3466228 15.7071068,15.7071068 C15.3165825,16.0976311 14.6834175,16.0976311 14.2928932,15.7071068 L14.2928932,15.7071068 L8,9.415 L1.70710678,15.7071068 C1.31658249,16.0976311 0.683417511,16.0976311 0.292893219,15.7071068 C-0.0675907428,15.3466228 -0.0953202783,14.7793918 0.209704612,14.3871006 L0.292893219,14.2928932 L6.585,8 L0.292893219,1.70710678 L0.209704612,1.61289944 C-0.0953202783,1.22060824 -0.0675907428,0.65337718 0.292893219,0.292893219 Z"
        fill="#242424"
        fill-rule="nonzero"
    ></path>
</g>
</svg>
`;

const StyleOverrideComment = `<!-- Applies position and/or z-index values for appropriate rendering in "docs" tab  -->`;

export const WithoutActions = () =>
  storyWrapper(`${StyleOverrideComment}
  <div class="qpp-c-modal__overlay" style="position: absolute; z-index: 10;"></div>
  <div class="qpp-c-modal" style="position: relative; z-index: 10;">
      <div class="qpp-c-modal__content" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="modal-heading" aria-describedby="modal-body">
          <div class="qpp-c-modal__header">
              <h3 id="modal-heading">Title Text</h3>
              <button class="closex qpp-c-button qpp-c-button--text qpp-u-color--black" aria-label="close modal" data-testid="modal-close-btn">
                  ${closeSvg}
              </button>
          </div>
          <div id="modal-body" class="qpp-c-modal__body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac pulvinar massa, in mattis ligula. Vestibulum enim velit, ullamcorper vitae lorem ullamcorper, blandit fringilla mauris.</p>
          </div>
      </div>
  </div>
  `);

export const WithActions = () =>
  storyWrapper(`${StyleOverrideComment}
  <div class="qpp-c-modal__overlay" style="position: absolute; z-index: 10;"></div>
  <div class="qpp-c-modal" style="position: relative; z-index: 10;">
      <div class="qpp-c-modal__content" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="modal-heading" aria-describedby="modal-body">
          <div class="qpp-c-modal__header">
              <h3 id="modal-heading">Title Text</h3>
              <button class="closex qpp-c-button qpp-c-button--text qpp-u-color--black" aria-label="close modal" data-testid="modal-close-btn">
                  ${closeSvg}
              </button>
          </div>
          <div id="modal-body" class="qpp-c-modal__body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac pulvinar massa, in mattis ligula. Vestibulum enim velit, ullamcorper vitae lorem ullamcorper, blandit fringilla mauris.</p>
          </div>
          <div class="qpp-c-modal__footer">
              <button class="qpp-c-button qpp-c-button--secondary qpp-u-margin-right--16" aria-label="No, take me back" data-testid="modal-secondary-btn">No, take me back</button>
              <button class="qpp-c-button" data-testid="modal-primary-btn" aria-label="Yes, go for it">Yes, go for it</button>
          </div>
      </div>
  </div>
  `);

export const ScrollableContent = () =>
  storyWrapper(`${StyleOverrideComment}
  <div class="qpp-c-modal__overlay" style="position: absolute; z-index: 10;"></div>
  <div class="qpp-c-modal" style="position: relative; z-index: 10;">
      <div class="qpp-c-modal__content" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="modal-heading" aria-describedby="modal-body">
          <div class="qpp-c-modal__header qpp-c-modal__header-sep">
              <h3 id="modal-heading">Title Text</h3>
              <button class="closex qpp-c-button qpp-c-button--text qpp-u-color--black" aria-label="close modal" data-testid="modal-close-btn">
                  ${closeSvg}
              </button>
          </div>
          <div id="modal-body" class="qpp-c-modal__body" tabindex="0">
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac pulvinar massa, in mattis ligula. Vestibulum enim velit, ullamcorper vitae lorem ullamcorper, blandit fringilla mauris. Aenean odio nulla, dapibus
                  convallis est ac, tempor congue lorem. Aliquam facilisis tortor eget lectus gravida bibendum. Suspendisse vel posuere risus. Etiam condimentum sollicitudin est, eget auctor lectus suscipit nec. Duis efficitur vitae risus
                  at malesuada. Mauris tempus turpis sed lacus lacinia, et mattis tortor eleifend. In sit amet felis vel quam egestas ultricies ac ac nisl. Morbi elementum dui libero, non convallis risus ornare vel. Maecenas posuere ipsum
                  ut sem aliquet, quis maximus dolor cursus. Praesent vulputate orci tellus, sed fringilla arcu mollis sit amet. Phasellus eros turpis, consequat sit amet placerat sed, mollis ac justo.
              </p>
              <p>
                  Cras quis pharetra elit. Mauris lacinia quam quis metus mattis lobortis vel nec arcu. Fusce nec tellus vel nunc cursus vestibulum. Quisque pretium, arcu at sagittis posuere, leo magna tempus nunc, vel malesuada nunc
                  mauris ac ante. Donec arcu velit, imperdiet vitae purus nec, imperdiet auctor nisi. Cras ornare, elit sit amet viverra bibendum, justo dolor congue mi, quis pretium erat orci a lorem. Sed rhoncus quam ut tellus hendrerit
                  accumsan.
              </p>
              <p>
                  Donec varius elit vitae elit efficitur fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Ut malesuada venenatis varius. Nunc libero massa, luctus sagittis
                  sapien ultrices, pulvinar venenatis purus. In nec orci ac nibh sagittis lobortis vel sed massa. Morbi pretium odio vitae malesuada ullamcorper. Pellentesque facilisis posuere consectetur. Nam maximus finibus ante, non
                  eleifend neque euismod et.
              </p>
              <p>
                  Pellentesque vehicula nec massa nec accumsan. Pellentesque non odio eu felis hendrerit pellentesque non sed neque. Morbi dui nisl, facilisis id gravida non, vehicula at dui. In eleifend suscipit imperdiet. Quisque
                  facilisis augue et mi lobortis tristique. Praesent auctor dictum erat, non mollis ante tempus id. Integer et libero iaculis, imperdiet neque at, pharetra nisl. Suspendisse diam massa, vehicula eu varius ullamcorper,
                  semper vel velit. Morbi consequat mattis nisi, id dignissim est bibendum non. Suspendisse semper laoreet neque, ac tincidunt tortor. Ut posuere urna a convallis consectetur. Mauris varius cursus libero sed molestie. Duis
                  id dignissim arcu. Mauris tincidunt egestas congue.
              </p>
              <p>
                  Donec rutrum erat vitae nulla ultricies, quis laoreet orci consequat. Nunc et justo volutpat dolor feugiat convallis. Vivamus efficitur nisi quis risus eleifend, ut tincidunt turpis volutpat. Nam commodo turpis dolor,
                  dapibus rutrum erat facilisis a. Ut a dictum urna. Maecenas vel egestas odio. Ut venenatis est dolor, eget ullamcorper diam finibus et. Proin tincidunt porta pellentesque.
              </p>
          </div>
          <div class="qpp-c-modal__footer">
              <button class="qpp-c-button qpp-c-button--secondary qpp-u-margin-right--16" aria-label="No, take me back" data-testid="modal-secondary-btn">No, take me back</button>
              <button class="qpp-c-button" data-testid="modal-primary-btn" aria-label="Yes, go for it">Yes, go for it</button>
          </div>
      </div>
  </div>
  `);

export const WrappingOverlay = () =>
  storyWrapper(`${StyleOverrideComment}
  <div class="qpp-c-modal">
      <div class="qpp-c-modal__overlay" style="position: absolute;">
          <div class="qpp-c-modal__content" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="modal-heading" aria-describedby="modal-body">
              <div class="qpp-c-modal__header">
                  <h3 id="modal-heading">Wrapping Overlay Example</h3>
                  <button class="closex qpp-c-button qpp-c-button--text qpp-u-color--black" aria-label="close modal" data-testid="modal-close-btn">
                      ${closeSvg}
                  </button>
              </div>
              <div id="modal-body" class="qpp-c-modal__body">
                  <p>Some implementations like react-modal will wrap the modal content inside the overlay div.  See html source for this example to see how this works.</p>
              </div>
              <div class="qpp-c-modal__footer">
                  <button class="qpp-c-button qpp-c-button--secondary qpp-u-margin-right--16" aria-label="No, take me back" data-testid="modal-secondary-btn">No, take me back</button>
                  <button class="qpp-c-button" data-testid="modal-primary-btn" aria-label="Yes, go for it">Yes, go for it</button>
              </div>
          </div>
      </div>
  </div>
`);
