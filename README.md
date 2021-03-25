# memo

## とりくみ
* playとangularを立てる方法と、playの中でangularを使う方法(angular-element)がある　注意！
    - 今回はplayとangularで進めていく
    - play側はjsonを返す
    - angular側は描画を担当

* json化はひとまず後回し
    - play側で適当なjsonを固定で返しておく

* angularを導入する
* `typescript``pug`もまとめて導入

* 何でもいいのでページを表示させる
    - プロジェクトの立ち上げチェック

* 適当なコンポーネントを作ってみる
    - angularの動作チェック

* tohに従って色々作ってみる
    * componentの自動生成
        -  差分をチェック
    * input-formを作成
    * click eventを作成
        - 選択したデータを別componentに渡して表示してみる
    * serviceを作成
    * routingを作成
        - 自分で適当に作ったcomponentにも繋いでみる

## angularの導入
* nvmでnode, npmを導入
* npmでngを導入

準備完了！

## プロジェクトの作成
* `ng new <project name>`
* `yarn add <packages>`
    - pug
    - pug cli
    - typescript

## 気がついたこと
* パッケージを導入する際のこまめなビルド
    - 依存とかでこけがち
    - 学び始めだとなかなか原因を探れないので、こまめにビルドを挟んでエラーが起きるタイミングを把握しておく





# --------- angular -----------

# TodoFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
