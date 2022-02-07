export const setUtagLink = (eventCategory, eventAction, eventLabel) =>
  window?.utag?.link({
    ga_event_category: eventCategory,
    ga_event_action: eventAction,
    ga_event_label: eventLabel,
    page_title: `${window.document.title}`,
    page_url: `${window.location.pathname}`,
    event: 'trackEvent',
  });
