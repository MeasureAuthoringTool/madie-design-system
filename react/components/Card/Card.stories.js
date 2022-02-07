import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import Card from './index';

export default {
  title: 'Card',
  component: Card,
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <div className="qpp-u-padding--12 qpp-u-width--33">
      <Card
        title="Card Heading"
        eyebrow="Eyebrow"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo et lacus lacinia tristique. Nulla dignissim ipsum sit amet posuere interdum."
        cta={{
          text: 'Call to Action',
          href: '#',
        }}
      />
    </div>
  );
};

export const CustomButton = () => (
  <div className="qpp-u-padding--12 qpp-u-width--33">
    <Card
      title="Card Heading"
      eyebrow="Eyebrow"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo et lacus lacinia tristique. Nulla dignissim ipsum sit amet posuere interdum."
      cta={
        <button
          className="qpp-c-button"
          onClick={() => console.log("I've been clicked")}
          style={{
            padding: '0.75rem 1rem',
          }}
        >
          Click me
        </button>
      }
    />
  </div>
);

export const Image = () => (
  <div className="qpp-u-padding--12 qpp-u-width--33">
    <Card
      title="Card Heading"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo et lacus lacinia tristique. Nulla dignissim ipsum sit amet posuere interdum."
      eyebrow="Eyebrow"
      cta={{
        text: 'Call to Action',
        href: '#',
      }}
      img={{
        url: 'https://qpp.cms.gov/images/public/images/resource-data-submission-mips.png',
        alt: 'Card image alt',
      }}
    />
  </div>
);

export const SmallImageCard = () => (
  <div className="qpp-u-padding--12 wrap qpp-u-width--25">
    <Card
      title="Card Heading"
      eyebrow="Eyebrow"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo et lacus lacinia tristique. Nulla dignissim ipsum sit amet posuere interdum."
      size="small"
      cta={{
        text: 'Call to Action',
        href: '#',
      }}
      img={{
        url: 'https://qpp.cms.gov/images/public/images/resource-data-submission-mips.png',
        alt: 'Card image alt',
      }}
    />
  </div>
);

export const MediumImageCard = () => (
  <div className="qpp-u-padding--12 wrap qpp-u-width--33">
    <Card
      title="Card Heading"
      eyebrow="Eyebrow"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo et lacus lacinia tristique. Nulla dignissim ipsum sit amet posuere interdum."
      size="medium"
      cta={{
        text: 'Call to Action',
        href: '#',
      }}
      img={{
        url: 'https://qpp.cms.gov/images/public/images/resource-data-submission-mips.png',
        alt: 'Card image alt',
      }}
    />
  </div>
);

export const LargeImageCard = () => (
  <div className="qpp-u-padding--12 wrap qpp-u-width--100">
    <Card
      title="Card Heading"
      eyebrow="Eyebrow"
      variant="flag"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo et lacus lacinia tristique. Nulla dignissim ipsum sit amet posuere interdum."
      size="large"
      cta={{
        text: 'Call to Action',
        href: '#',
      }}
      img={{
        url: 'https://qpp.cms.gov/images/public/images/resource-data-submission-mips.png',
        alt: 'Card image alt',
      }}
    />
  </div>
);

export const ResponsiveFlagCard = () => (
  <div className="qpp-u-padding--12 wrap qpp-u-width--100">
    <Card
      title="Card Heading"
      eyebrow="Eyebrow"
      responsive
      variant="flag"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo et lacus lacinia tristique. Nulla dignissim ipsum sit amet posuere interdum."
      size="large"
      cta={{
        text: 'Call to Action',
        href: '#',
      }}
      img={{
        url: 'https://qpp.cms.gov/images/public/images/resource-data-submission-mips.png',
        alt: 'Card image alt',
      }}
    />
  </div>
);

export const BackgroundImageCard = () => (
  <div className="qpp-u-padding--12 wrap qpp-u-width--33">
    <Card
      className="qpp-c-card--medium qpp-c-card--image qpp-c-xs-card--flag qpp-c-sm-card--default qpp-u-flex--auto qpp-u-sm-flex--1"
      title="QPP Access User Guide"
      description="Download zip file"
      cta={{
        text: 'Call to Action',
        href: '#',
      }}
      img={{
        url: 'https://qpp.cms.gov/images/public/images/resource-pdf.png',
        alt: 'Card image alt',
        useBgImage: true,
      }}
    />
  </div>
);
