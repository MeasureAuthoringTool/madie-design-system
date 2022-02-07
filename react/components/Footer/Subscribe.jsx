import React from 'react';

const Subscribe = () => (
  <div className="subscriber-form">
    <form
      action="https://public.govdelivery.com/accounts/USCMS/subscriber/qualify"
      target="_blank"
      acceptCharset="UTF-8"
      method="get"
      rel="noopener noreferrer"
    >
      <input type="hidden" name="topic_id" value="USCMS_12196" />
      <label className="sr-only" htmlFor="email-subscribe">
        Email address
      </label>
      <input
        id="email-subscribe"
        className="form-control"
        type="email"
        name="email"
        placeholder="Enter your Email"
      />
      <button
        className="btn btn-subscribe js-subscribe-submit"
        type="submit"
        name="commit"
      >
        Subscribe
      </button>
    </form>
  </div>
);

export default Subscribe;
