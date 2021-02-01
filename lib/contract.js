/**
 * @typedef {import('./product.js').Product} Product
 */

/**
 * @typeof Contract
 * @property {Product} product - 購入する製品
 * @property {string} signedDate - 契約日(YYYY-MM-DD)
 */

/**
 * @typeof Revenue
 * @property {number} price - 収益価格
 */

/**
 * 契約
 * @param {Product} product
 * @param {string} signedDate  - 契約日(YYYY-MM-DD)
 * @returns Contract
 */
function sign(product, signedDate) {
  return {
    product,
    signedDate
  };
}

/**
 * 収益認識
 * @param {Contract} contract
 * @param {string} recognitionDate - 収益認識日(YYYY-MM-DD)
 * @returns {Revenue}
 */
function revenueRecognition(contract, recognitionDate) {
  const date1 = new Date(contract.signedDate);
  const date2 = new Date(recognitionDate);
  const diffDay = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);

  return calcRevenueRecognition(
    contract.product.category,
    diffDay,
    contract.product.price
  );
}

function calcRevenueRecognition(category, days, price) {
  switch (category) {
    case "ワードプロセッサ":
      return price;
    case "スプレッドシート":
      if (days > 30) {
        return price;
      }
      return 0; // TODO
  }
}

module.exports = {
  sign,
  revenueRecognition
};
