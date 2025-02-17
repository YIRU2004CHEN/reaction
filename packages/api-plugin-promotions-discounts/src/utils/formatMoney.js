 import accounting from "accounting-js";

/**
 * @summary Formats a number as money with 2 decimal places
 * @param {Number} amount - The amount to format
 * @returns {String} The formatted amount

export default function formatMoney(amount) {
  return Number(accounting.toFixed(amount, 2));
}

*/


import accounting from "accounting-js";

function formatMoney(amount, currency = "USD", locale = "en-US", options = {}) {
    const fixedAmount = Number(accounting.toFixed(amount, options.decimals ?? 2));
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
        minimumFractionDigits: options.minimumFractionDigits ?? 2,
        maximumFractionDigits: options.maximumFractionDigits ?? 2
    }).format(amount);
}
