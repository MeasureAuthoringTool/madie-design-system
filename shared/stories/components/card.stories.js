import storyWrapper from '../storyWrapper';
import svgDownload from '@material-design-icons/svg/filled/download.svg';
import svgNavigateNext from '@material-design-icons/svg/filled/navigate_next.svg';
import svgNavigateBefore from '@material-design-icons/svg/filled/navigate_before.svg';
import svgLaunch from '@material-design-icons/svg/filled/launch.svg';
import { mapSvgAttrs } from '../svgAttrs';

export default {
  title: 'Components/Card',
};

const getSVGs = () => {
  const [DOWNLOAD, NEXT, BEFORE] = mapSvgAttrs(
    [svgDownload, svgNavigateNext, svgNavigateBefore],
    {
      class: 'qpp-icon-mat',
      'aria-hidden': 'true',
      role: 'img',
      focusable: 'false',
    }
  );
  const [LAUNCH] = mapSvgAttrs([svgLaunch], {
    class: 'qpp-icon-mat',
    'aria-label': 'external website',
    role: 'img',
    focusable: 'false',
  });
  return {
    NEXT,
    BEFORE,
    DOWNLOAD,
    LAUNCH,
  };
};

export const Card = () => {
  const { NEXT } = getSVGs();
  return storyWrapper(`
    <div class="wrap qpp-u-width--33">
      <div class="qpp-c-card">
        <!-- qpp-c-card__content wrapper is optional for non-flag-layout cards -->
        <div class="qpp-c-card__header">
          <h3 class="h3 qpp-c-card__title">This is the title of the card. It may span multiple lines.</h3>
          <span class="l2 qpp-c-card__eyebrow">Eyebrow</span>
        </div>
        <div class="qpp-c-card__body">
          <p class="p1">Sometimes cards need a description or intro text to give further clearification as to what the user should expect to find or learn if they click the CTA.</p>
        </div>
        <div class="qpp-c-card__cta">
          <a href="#" target="_self" class="qpp-c-button qpp-c-button--text qpp-c-button--icon-after">
            This is a descriptive CTA${NEXT}
          </a>
        </div>
      </div>
    </div>
  `);
};

export const ImageCard = () => {
  const { NEXT } = getSVGs();
  return storyWrapper(`
    <div class="wrap qpp-u-width--33">
      <div class="qpp-c-card qpp-c-card--image">
        <div class="qpp-c-card__content">
          <div class="qpp-c-card__header">
            <h3 class="h3 qpp-c-card__title">This is the title of the card. It may span multiple lines.</h3>
            <span class="l2 qpp-c-card__eyebrow">Eyebrow</span>
          </div>
          <div class="qpp-c-card__body">
            <p class="p1">Sometimes cards need a description or intro text to give further clearification as to what the user should expect to find or learn if they click the CTA.</p>
          </div>
          <div class="qpp-c-card__cta">
            <a href="#" target="_self" class="qpp-c-button qpp-c-button--text qpp-c-button--icon-after">
              This is a descriptive CTA${NEXT}
            </a>
          </div>
        </div>
        <div class="qpp-c-card__media">
          <img src="https://qpp.cms.gov/images/public/images/resource-data-submission-mips.png" alt="make sure to apply alt text or assign aria-hidden"/>
        </div>
      </div>
    </div>
  `);
};

export const ImageCardFlagLayout = () => {
  const { NEXT } = getSVGs();
  return storyWrapper(`
    <div class="wrap qpp-u-width--100">
      <div class="qpp-c-card qpp-c-card--image qpp-c-card--flag">
        <div class="qpp-c-card__content">
          <div class="qpp-c-card__header">
            <h3 class="h3 qpp-c-card__title">This is the title of the card. It may span multiple lines.</h3>
            <span class="l2 qpp-c-card__eyebrow">Eyebrow</span>
          </div>
          <div class="qpp-c-card__body">
            <p class="p1">Sometimes cards need a description or intro text to give further clearification as to what the user should expect to find or learn if they click the CTA.</p>
          </div>
          <div class="qpp-c-card__cta">
            <a href="#" target="_self" class="qpp-c-button qpp-c-button--text qpp-c-button--icon-after">
              This is a descriptive CTA${NEXT}
            </a>
          </div>
        </div>
        <div class="qpp-c-card__media">
          <img src="https://qpp.cms.gov/images/public/images/resource-data-submission-mips.png" alt="make sure to apply alt text or assign aria-hidden"/>
        </div>
      </div>
    </div>
  `);
};

const cardsStoryWrapper = (
  cards = [
    ({
      className = '',
      titleText = '',
      bodyText = '',
      ctaText = '',
      ctaIconName = 'chevron-right',
      imgUrl = '',
      useBgImage = false,
    } = {}),
  ],
  wrapperClassName = ''
) => {
  const icons = getSVGs();
  return storyWrapper(`
    <ul class="qpp-u-padding--0 ${wrapperClassName}">
    ${cards.reduce(
      (acc, card, i) =>
        acc +
        `
        <li class="qpp-c-card ${card.imgUrl ? 'qpp-c-card--image' : ''} ${
          card.className
        }">
          <div class="qpp-c-card__content">
            <div class="qpp-c-card__header">
              <h3 class="h3 qpp-c-card__title">${card.titleText}</h3>
            </div>
            <div class="qpp-c-card__body">
              <p class="p1">${card.bodyText}</p>
            </div>
            <div class="qpp-c-card__cta">
              <a href="#" target="_self" class="qpp-c-button qpp-c-button--text qpp-c-button--icon-after">
                ${card.ctaText}${icons[card.ctaIconName]}
              </a>
            </div>
          </div>
          ${
            card.imgUrl
              ? `<div class="qpp-c-card__media">
                ${
                  card.useBgImage
                    ? `<div role="img" style="background-image: url(${card.imgUrl});" aria-label="remember to apply alt text or assign aria-hidden"></div>`
                    : `<img src="${card.imgUrl}" alt="remember to apply alt text or assign aria-hidden"/>`
                }
                </div>`
              : ''
          }
        </li>
        `,
      ''
    )}
    </ul>
  `);
};

export const SmallImageCard = () => {
  const { NEXT } = getSVGs();
  return storyWrapper(`
    <div class="wrap qpp-u-width--25">
      <div class="qpp-c-card qpp-c-card--image qpp-c-card--small">
        <div class="qpp-c-card__content">
          <div class="qpp-c-card__header">
            <h3 class="h3 qpp-c-card__title">This is the title of the card. It may span multiple lines.</h3>
          </div>
          <div class="qpp-c-card__cta">
            <a href="#" target="_self" class="qpp-c-button qpp-c-button--text qpp-c-button--icon-after">
              This is a descriptive CTA${NEXT}
            </a>
          </div>
        </div>
        <div class="qpp-c-card__media">
          <img src="https://qpp.cms.gov/images/public/images/resource-data-submission-mips.png" alt="make sure to apply alt text or assign aria-hidden"/>
        </div>
      </div>
    </div>
  `);
};

export const MediumImageCard = () => {
  const { NEXT } = getSVGs();
  return storyWrapper(`
    <div class="wrap qpp-u-width--33">
      <div class="qpp-c-card qpp-c-card--image qpp-c-card--medium">
        <div class="qpp-c-card__content">
          <div class="qpp-c-card__header">
            <h3 class="h3 qpp-c-card__title">This is the title of the card. It may span multiple lines.</h3>
          </div>
          <div class="qpp-c-card__cta">
            <a href="#" target="_self" class="qpp-c-button qpp-c-button--text qpp-c-button--icon-after">
              This is a descriptive CTA${NEXT}
            </a>
          </div>
        </div>
        <div class="qpp-c-card__media">
          <img src="https://qpp.cms.gov/images/public/images/resource-data-submission-mips.png" alt="make sure to apply alt text or assign aria-hidden"/>
        </div>
      </div>
    </div>
  `);
};

export const LargeImageCard = () => {
  const { NEXT } = getSVGs();
  return storyWrapper(`
    <div class="wrap qpp-u-width--100">
      <div class="qpp-c-card qpp-c-card--image qpp-c-card--flag qpp-c-card--large">
        <div class="qpp-c-card__content">
          <div class="qpp-c-card__header">
            <h3 class="h3 qpp-c-card__title">Group and/or Individual Data Submission for MIPS</h3>
          </div>
          <div class="qpp-c-card__body">
            <p class="p1">Find out how individual clinicians or groups can submit performance measures to the QPP program. This how-to video shows how to upload Quality files, and Promoting Interoperability (formerly Advancing Care Information) and Improvement Activities data.</p>
          </div>
          <div class="qpp-c-card__cta">
            <a href="#" target="_self" class="qpp-c-button qpp-c-button--text qpp-c-button--icon-after">
              This is a descriptive CTA${NEXT}
            </a>
          </div>
        </div>
        <div class="qpp-c-card__media">
          <img src="https://qpp.cms.gov/images/public/images/resource-data-submission-mips.png" alt="make sure to apply alt text or assign aria-hidden"/>
        </div>
      </div>
    </div>
  `);
};

export const ResponsiveFlagCardExample = () => {
  const { NEXT } = getSVGs();
  return storyWrapper(`
    <div class="wrap qpp-u-width--100">
      <div class="qpp-c-card qpp-c-card--image qpp-c-xs-card--flag">
        <div class="qpp-c-card__content">
          <div class="qpp-c-card__header">
            <h3 class="h3 qpp-c-card__title">Group and/or Individual Data Submission for MIPS</h3>
          </div>
          <div class="qpp-c-card__body">
            <p class="p1">Find out how individual clinicians or groups can submit performance measures to the QPP program. This how-to video shows how to upload Quality files, and Promoting Interoperability (formerly Advancing Care Information) and Improvement Activities data.</p>
          </div>
          <div class="qpp-c-card__cta">
            <a href="#" target="_self" class="qpp-c-button qpp-c-button--text qpp-c-button--icon-after">
              This is a descriptive CTA${NEXT}
            </a>
          </div>
        </div>
        <div class="qpp-c-card__media">
          <img src="https://qpp.cms.gov/images/public/images/resource-data-submission-mips.png" alt="make sure to apply alt text or assign aria-hidden"/>
        </div>
      </div>
    </div>
  `);
};

export const ResponsiveTwoByTwoExample = () =>
  cardsStoryWrapper(
    [
      {
        className: 'qpp-c-card qpp-u-flex-auto qpp-u-sm-flex--half',
        titleText: 'This is the title of the card. It may span multiple lines.',
        bodyText:
          'Sometimes cards need a description or intro text to give further clearification as to what the user should expect to find or learn if they click the CTA.',
        ctaText: 'This is a descriptive CTA',
        ctaIconName: 'NEXT',
      },
      {
        className: 'qpp-c-card qpp-u-flex-auto qpp-u-sm-flex--half',
        titleText: 'This is the title of the card. It may span multiple lines.',
        bodyText:
          'Sometimes cards need a description or intro text to give further clearification as to what the user should expect to find or learn if they click the CTA.',
        ctaText: 'This is a descriptive CTA',
        ctaIconName: 'NEXT',
      },
      {
        className: 'qpp-c-card qpp-u-flex-auto qpp-u-sm-flex--half',
        titleText: 'This is the title of the card. It may span multiple lines.',
        bodyText:
          'Sometimes cards need a description or intro text to give further clearification as to what the user should expect to find or learn if they click the CTA.',
        ctaText: 'This is a descriptive CTA',
        ctaIconName: 'NEXT',
      },
      {
        className: 'qpp-c-card qpp-u-flex-auto qpp-u-sm-flex--half',
        titleText: 'This is the title of the card. It may span multiple lines.',
        bodyText:
          'Sometimes cards need a description or intro text to give further clearification as to what the user should expect to find or learn if they click the CTA.',
        ctaText: 'This is a descriptive CTA',
        ctaIconName: 'NEXT',
      },
    ],
    'qpp-u-display--inline-flex qpp-u-flex-wrap--wrap qpp-u-flex-gap--32 qpp-u-flex-direction--column qpp-u-sm-flex-direction--row'
  );

export const ResponsiveFlexCardsExample = () =>
  cardsStoryWrapper(
    [
      {
        className:
          'qpp-c-card--medium qpp-c-card--image qpp-c-xs-card--flag qpp-c-sm-card--default qpp-u-flex--auto',
        titleText: 'QPP Access User Guide',
        bodyText: '',
        ctaText: 'Download zip file',
        ctaIconName: 'DOWNLOAD',
        imgUrl: 'https://qpp.cms.gov/images/public/images/resource-pdf.png',
      },
      {
        className:
          'qpp-c-card--medium qpp-c-card--image qpp-c-xs-card--flag qpp-c-sm-card--default qpp-u-flex--auto',
        titleText: 'Small, Underserved and Rural Practices',
        bodyText: '',
        ctaText: 'View documentation',
        ctaIconName: 'NEXT',
        imgUrl:
          'https://qpp.cms.gov/images/public/images/resource-small-underserved-rural.png',
      },
      {
        className:
          'qpp-c-card--medium qpp-c-card--image qpp-c-xs-card--flag qpp-c-sm-card--default qpp-u-flex--auto',
        titleText: 'Help & Support',
        bodyText: '',
        ctaText: 'View documentation',
        ctaIconName: 'NEXT',
        imgUrl:
          'https://qpp.cms.gov/images/public/images/resource-help-support.png',
      },
    ],
    'qpp-u-display--inline-flex qpp-u-display--inline-flex qpp-u-flex-gap--32 qpp-u-flex-direction--column qpp-u-sm-flex-direction--row'
  );

export const BackgroundImageFlexCardsExample = () =>
  cardsStoryWrapper(
    [
      {
        className:
          'qpp-c-card--medium qpp-c-card--image qpp-c-xs-card--flag qpp-c-sm-card--default qpp-u-flex--auto',
        titleText: 'QPP Access User Guide',
        bodyText: '',
        ctaText: 'Download zip file',
        ctaIconName: 'DOWNLOAD',
        imgUrl: 'https://qpp.cms.gov/images/public/images/resource-pdf.png',
        useBgImage: true,
      },
      {
        className:
          'qpp-c-card--medium qpp-c-card--image qpp-c-xs-card--flag qpp-c-sm-card--default qpp-u-flex--auto',
        titleText: 'Small, Underserved and Rural Practices',
        bodyText: '',
        ctaText: 'View documentation',
        ctaIconName: 'NEXT',
        imgUrl:
          'https://qpp.cms.gov/images/public/images/resource-small-underserved-rural.png',
        useBgImage: true,
      },
      {
        className:
          'qpp-c-card--medium qpp-c-card--image qpp-c-xs-card--flag qpp-c-sm-card--default qpp-u-flex--auto',
        titleText: 'Help & Support',
        bodyText: '',
        ctaText: 'View documentation',
        ctaIconName: 'NEXT',
        imgUrl:
          'https://qpp.cms.gov/images/public/images/resource-help-support.png',
        useBgImage: true,
      },
    ],
    'qpp-u-display--inline-flex qpp-u-flex-gap--32 qpp-u-flex-direction--column qpp-u-sm-flex-direction--row'
  );

export const ResponsiveHomePageExample = () =>
  cardsStoryWrapper(
    [
      {
        className:
          'qpp-c-card qpp-c-card--image qpp-c-xs-card--flag qpp-c-card--large qpp-u-flex--auto',
        titleText: 'Group and/or Individual Data Submission for MIPS',
        bodyText:
          'Find out how individual clinicians or groups can submit performance measures to the QPP program. This how-to video shows how to upload Quality files, and Promoting Interoperability (formerly Advancing Care Information) and Improvement Activities data.',
        ctaText: 'Watch video on YouTube',
        ctaIconName: 'LAUNCH',
        imgUrl:
          'https://qpp.cms.gov/images/public/images/resource-data-submission-mips.png',
        useBgImage: true,
      },
      {
        className:
          'qpp-c-card--medium qpp-c-card--image qpp-c-xs-card--flag qpp-c-sm-card--default qpp-u-flex--auto qpp-u-sm-flex--1',
        titleText: 'QPP Access User Guide',
        bodyText: '',
        ctaText: 'Download zip file',
        ctaIconName: 'DOWNLOAD',
        imgUrl: 'https://qpp.cms.gov/images/public/images/resource-pdf.png',
        useBgImage: true,
      },
      {
        className:
          'qpp-c-card--medium qpp-c-card--image qpp-c-xs-card--flag qpp-c-sm-card--default qpp-u-flex--auto qpp-u-sm-flex--1',
        titleText: 'Small, Underserved and Rural Practices',
        bodyText: '',
        ctaText: 'View documentation',
        ctaIconName: 'NEXT',
        imgUrl:
          'https://qpp.cms.gov/images/public/images/resource-small-underserved-rural.png',
        useBgImage: true,
      },
      {
        className:
          'qpp-c-card--medium qpp-c-card--image qpp-c-xs-card--flag qpp-c-sm-card--default qpp-u-flex--auto qpp-u-sm-flex--1',
        titleText: 'Help & Support',
        bodyText: '',
        ctaText: 'View documentation',
        ctaIconName: 'NEXT',
        imgUrl:
          'https://qpp.cms.gov/images/public/images/resource-help-support.png',
        useBgImage: true,
      },
    ],
    'qpp-u-display--inline-flex qpp-u-flex-wrap--wrap qpp-u-flex-gap-col--32 qpp-u-flex-gap-row--40 qpp-u-xs-flex-gap-row--48 qpp-u-flex-direction--column qpp-u-sm-flex-direction--row'
  );
