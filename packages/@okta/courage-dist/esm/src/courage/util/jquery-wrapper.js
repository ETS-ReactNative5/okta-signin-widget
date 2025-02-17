import jQuery from '../vendor/lib/jquery-1.12.4.js';

/* eslint-disable @okta/okta-ui/enforce-requirejs-names, @okta/okta-ui/no-specific-modules */
jQuery.ajaxSetup({
  beforeSend: function (xhr) {
    xhr.setRequestHeader('X-Okta-XsrfToken', jQuery('#_xsrfToken').text());
  },
  converters: {
    'text secureJSON': function (str) {
      if (str.substring(0, 11) === 'while(1){};') {
        str = str.substring(11);
      }

      return JSON.parse(str);
    }
  }
}); // Selenium Hook
// Widget such as autocomplete and autosuggest needs to be triggered from the running version of jQuery.
// We have 2 versions of jQuery running in parallel and they don't share the same events bus

const oktaJQueryStatic = jQuery;
window.jQueryCourage = oktaJQueryStatic;

export { oktaJQueryStatic as default };
