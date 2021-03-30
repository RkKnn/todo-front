# memo
todo-appを作り始めてからのメモ
それまでのことはmaster branchに記載

## とりくみ
* play側: モデルをjson化する
    - 最初はなるべくパラメータの少ないもので試す
* angular側: jsonを読み込む
    - @typesを定義してjsonに型を付けてみる
* angular側: play側に更新リクエストを投げる
    - checkbox: 複数項目が絡んでくると厄介
        - 初めはデータの追加など、単一項目でできるものから
    - CSRF token周りで詰まる
        - play側のsessionが影響していた
        - sessionは、`開発者ツール > Application > Cookie` から消すことができる
## 気がついたこと
