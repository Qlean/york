'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function formatPhoneForHref(phone) {
  return `tel:${phone.replace(/(\s|-|\(|\))/g, '')}`;
}

//eslint-disable-line

exports.formatPhoneForHref = formatPhoneForHref;
