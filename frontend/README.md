### 作成する環境

- Node.js: 14.20

### サービスの構築

```
$ docker-compose build
```

### Next をインストールする場合のコマンド(TypeScript 化するオプション付き)

```
docker-compose run --rm next yarn create next-app . --typescript
```

<!-- ### Reactをインストールする場合のコマンド(TypeScript化するオプション付き)
```
docker-compose run --rm next npx create-react-app . --template typescript
```

#### Rreactにする場合の注意点
docker-compose.ymlの10行目を```yarn start```に修正が必要  -->

### コンテナの作成と立ち上げ

```
$ docker-compose up
```

```
$ npm install @apollo/client graphql cross-fetch @graphql-codegen/cli
```
