問題文: https://gist.github.com/twada/856c37103ebd3d1fb973ba2c2654f9d6

## 前提条件
- [x] ソフトウェア製品（product）は、種類（category）名前（name）と価格（price）を持つ
- [ ] 収益認識の計算が割り切れない場合、初回の方を多くする
- [ ] 収益認識の総和は、売上と完全一致する

## TODO
- [x] ソフトウェア製品（product）を作ることができる
  - [x] 種類「ワードプロセッサ」の製品「MS Word」18,800 円を作成できる
  - [x] 種類「ワードプロセッサ」の製品「一太郎」の価格は 20,000円
  - [x] 種類「スプレッドシート」の製品「MS Excel」の価格は 27,800円
  - [x] 種類「スプレッドシート」の製品「三四郎」の価格は 5,000円

- [x] 商品購入の契約が作れること
  - [x] 契約には、契約された商品を持つこと
  - [x] 契約には、契約日を持つこと

- 収益認識ができること
  - [ ] 種類「ワードプロセッサ」の製品「MS Word」が購入されたら、18,800 円を収益認識する
  - [ ] 種類「ワードプロセッサ」の製品「一太郎」、20,000 円を収益認識する

  - スプレッドシートは契約日に売上の2/3、30日後に1/3を収益認識する
    - [ ] 種類「スプレッドシート」の製品「MS Excel」の売上の2/3は 18,534円(小数点未満が0.5未満は切り上げ)
    - [ ] 種類「スプレッドシート」の製品「MS Excel」の売上の1/3は 9,266円(小数点未満が0.5以上は切り上げ)
    - [ ] 種類「スプレッドシート」の製品「MS Excel」の売上の合計は 27,800円

    - [ ] 種類「スプレッドシート」の製品「三四郎」の売上の2/3は 3,334円(小数点未満が0.5未満は切り上げ)
    - [ ] 種類「スプレッドシート」の製品「三四郎」の売上の1/3は 1,666円(小数点未満が0.5以上は切り上げ)
    - [ ] 種類「スプレッドシート」の製品「三四郎」の売上の合計は 5,000円 