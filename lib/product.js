/**
 * @typeof Product
 * @property {string} name - 製品の名前
 * @property {number} price - 製品の価格
 * @property {string} category - 製品の種類
 */

function create({ name, price, category }) {
  return {
    name,
    price,
    category
  };
}

module.exports = {
  create
};
