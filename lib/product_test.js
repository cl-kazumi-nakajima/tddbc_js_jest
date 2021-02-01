/* eslint-env mocha */
const assert = require("assert").strict;
const Product = require("./product");

describe("ソフトウェア製品（product）を作る", () => {
  describe("種類「ワードプロセッサ」の製品「MS Word」18,800 円を作成できる", () => {
    let product;

    beforeEach(() => {
      product = Product.create({
        name: "MS Word",
        price: 18800,
        category: "ワードプロセッサ"
      });
    });

    // Memo: コードをドキュメントとして見るなら読みやすいけど、出力結果に注意を払う必要がある
    // 巨大なJSONの場合は、テストしたい箇所がぼけてしまうので、全体を見るのが1つ、ピンポイントで見るのを別途書いても良いかも
    // test('種類「ワードプロセッサ」の製品「MS Word」18,800 円を作成できる', () => {
    //   expect(product).toEqual({
    //     name: "MS Word",
    //     price: 18800,
    //     category: "ワードプロセッサ"
    //   });
    // })

    test('製品の名前は"MS Word"である', () => {
      assert.equal(product.name, "MS Word");
    });

    test("製品の価格は18800である", () => {
      assert.equal(product.price, 18800);
    });

    test('製品の種類は"ワードプロセッサ"である', () => {
      assert.equal(product.category, "ワードプロセッサ");
    });
  });

  describe("種類「ワードプロセッサ」の製品「一太郎」20,000円を作成できる", () => {
    let product;

    beforeEach(() => {
      product = Product.create({
        name: "一太郎",
        price: 20000,
        category: "ワードプロセッサ"
      });
    });

    test('製品の名前は"一太郎"である', () => {
      assert.equal(product.name, "一太郎");
    });

    test("製品の価格は20000である", () => {
      assert.equal(product.price, 20000);
    });

    test('製品の種類は"ワードプロセッサ"である', () => {
      assert.equal(product.category, "ワードプロセッサ");
    });
  });

  describe("種類「スプレッドシート」の製品「MS Excel」27,000円を作成できる", () => {
    let product;

    beforeEach(() => {
      product = Product.create({
        name: "MS Excel",
        price: 27000,
        category: "スプレッドシート"
      });
    });

    test('製品の名前は"MS Excel"である', () => {
      assert.equal(product.name, "MS Excel");
    });

    test("製品の価格は27000である", () => {
      assert.equal(product.price, 27000);
    });

    test('製品の種類は"スプレッドシート"である', () => {
      assert.equal(product.category, "スプレッドシート");
    });
  });

  describe("種類「スプレッドシート」の製品「三四郎」5,000円を作成できる", () => {
    let product;

    beforeEach(() => {
      product = Product.create({
        name: "三四郎",
        price: 5000,
        category: "スプレッドシート"
      });
    });

    test('製品の名前は"三四郎"である', () => {
      assert.equal(product.name, "三四郎");
    });

    test("製品の価格は5000である", () => {
      assert.equal(product.price, 5000);
    });

    test('製品の種類は"スプレッドシート"である', () => {
      assert.equal(product.category, "スプレッドシート");
    });
  });
});
