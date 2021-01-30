const assert = require("assert").strict;
const FizzBuzz = require("./fizzbuzz");

const fizzbuzz = new FizzBuzz();

beforeEach(() => {

});

describe('convertメソッドは数を文字列に変換する', () => {

  describe('3の倍数のときは数の代わりにFizzに変換する', () => {
    test("3を渡すと文字列Fizzを返す", () => {
      // 実行 & テスト
      assert.equal(fizzbuzz.convert(3), 'Fizz');
    });
  });

  describe('5の倍数のときは数の代わりにBuzzに変換する', () => {
    test("5を渡すと文字列Fizzを返す", () => {
      // 実行 & テスト
      assert.equal(fizzbuzz.convert(5), 'Buzz');
    });
  });

  describe('その他の数の時はそのまま文字列に変換する', () => {
    test("1を渡すと文字列1を返す", () => {
      // 実行 & テスト
      assert.equal(fizzbuzz.convert(1), '1');
    });
  });
});
