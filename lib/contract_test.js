/* eslint-env mocha */
const assert = require("assert").strict;
const Product = require("./product");
const Contract = require("./contract");

describe("契約が作れること", () => {
  test("種類「ワードプロセッサ」の製品「MS Word」18,800 円の契約ができる", () => {
    const product = Product.create({
      name: "MS Word",
      price: 18800,
      category: "ワードプロセッサ"
    });

    const contract = Contract.sign(product, "2021-02-01");

    expect(contract).toEqual({
      product,
      signedDate: "2021-02-01"
    });
  });

  test("種類「ワードプロセッサ」の製品「一太郎」20,000 円の契約ができる", () => {
    const product = Product.create({
      name: "一太郎",
      price: 20000,
      category: "ワードプロセッサ"
    });

    const contract = Contract.sign(product, "2020-12-14");

    expect(contract).toEqual({
      product,
      signedDate: "2020-12-14"
    });
  });
});

describe("収益認識ができること", () => {
  describe("種類「ワードプロセッサ」の製品の場合", () => {
    test("「MS Word」18,800 円の収益認識の結果、全額売上となる", () => {
      const product = Product.create({
        name: "MS Word",
        price: 18800,
        category: "ワードプロセッサ"
      });
      const contract = Contract.sign(product, "2021-02-01");
      assert.equal(Contract.revenueRecognition(contract, "2021-02-15"), 18800);
    });
    test("「一太郎」20,000 円の収益認識の結果、全額売上となる", () => {
      const product = Product.create({
        name: "一太郎",
        price: 20000,
        category: "ワードプロセッサ"
      });
      const contract = Contract.sign(product, "2021-02-01");
      assert.equal(Contract.revenueRecognition(contract, "2021-02-01"), 20000);
    });
  });
});
